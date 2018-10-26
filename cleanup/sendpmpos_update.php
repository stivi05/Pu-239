<?php

function sendpmpos_update($data)
{
    global $site_config, $fluent, $cache, $message_stuffs;

    set_time_limit(1200);
    ignore_user_abort(true);
    $dt = TIME_NOW;

    $users = $fluent->from('users')
        ->select(null)
        ->select('id')
        ->select('modcomment')
        ->where('sendpmpos > 1')
        ->where('sendpmpos < ?', $dt)
        ->fetchAll();

    $msgs_buffer = $users_buffer = [];
    $count = count($users);
    if ($count > 0) {
        $subject = 'PM ban expired.';
        $msg = "Your PM ban has expired and has been auto-removed by the system.\n";
        foreach ($users as $arr) {
            $comment = get_date($dt, 'DATE', 1) . " - PM ban Removed By System.\n";
            $modcomment = $comment . $arr['modcomment'];
            $msgs_buffer[] = [
                'sender' => 0,
                'receiver' => $arr['id'],
                'added' => $dt,
                'msg' => $msg,
                'subject' => $subject,
            ];
            $user = $cache->get('user' . $arr['id']);
            if (!empty($user)) {
                $cache->update_row('user' . $arr['id'], [
                    'sendpmpos' => 1,
                    'modcomment' => $modcomment,
                ], $site_config['expires']['user_cache']);
            }
        }
        $count = count($users_buffer);
        if ($count > 0) {
            $message_stuffs->insert($msgs_buffer);
            $set = [
                    'sendpmpos' => 1,
                    'modcomment' => new Envms\FluentPDO\Literal("CONCAT(\"$comment\", modcomment)"),
                ];
            $fluent->update('users')
                ->set($set)
                ->where('sendpmpos > 1')
                ->where('sendpmpos < ?', $dt)
                ->execute();
        }
        if ($data['clean_log']) {
            write_log('Cleanup - Removed PM ban from ' . $count . ' members');
        }
    }
}
