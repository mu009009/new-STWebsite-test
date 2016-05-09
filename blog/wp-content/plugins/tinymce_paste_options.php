<?php
/*
Plugin Name: TinyMCE Paste Options
Plugin URI: http://www.thismuchiknow.co.uk/?p=44
Description: Enables a few extra TinyMCE Paste options by default, to avoid problems when pasting from Word using MSIE.
Author: Dave Addey
Author URI: http://www.thismuchiknow.co.uk/
Version: 1.0
*/

if (!function_exists('tinymce_paste_options')) {

	function tinymce_paste_options($init) {

		$init['paste_auto_cleanup_on_paste'] = true;
		$init['paste_convert_headers_to_strong'] = true;

		return $init;

	}

}

add_filter('tiny_mce_before_init', 'tinymce_paste_options');

?>
