<?php
/**
 * For translating admin panel need to call this function before requiring of any module
 */
const TEXT_DOMAIN = '';
load_theme_textdomain( TEXT_DOMAIN, get_template_directory() . '/languages' );

//require_once __DIR__ . '/vendor/autoload.php'; @TODO: uncomment or remove
require_once ABSPATH . 'WPKit/init_autoloader.php';

$loader = new WPKit\Module\Loader();
$loader->load_modules();