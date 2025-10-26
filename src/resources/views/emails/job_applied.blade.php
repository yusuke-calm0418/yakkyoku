<?php
新しい応募がありました。

求人タイトル: {{ $job->title }}
応募者: {{ $application->pharmacist->full_name ?? '' }}

メッセージ:
{{ $application->message ?? '（メッセージなし）' }}