<?php
$router->get('/', function () use ($router) {
    return redirect()->route('users');
});
