<?php
/** 
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information by
 * visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'technekes_blog');

/** MySQL database username */
define('DB_USER', 'technekes');

/** MySQL database password */
define('DB_PASSWORD', 'Blogpass123');

/** MySQL hostname */
define('DB_HOST', 'prod-tk-iis-1a');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',        '=a|J+$? wBFgQ.Z_RFC9T+B7LjmMcI-ddx@8s{5>1l-f:<:*u+?}PnWQnN1x&qp6');
define('SECURE_AUTH_KEY', 'N7?UJHT[W;V>{N);Tm5cjQo_!J+eD@RK}b] PHY6^~rQ?qKO<%!9-nG/Miwq^YsK');
define('LOGGED_IN_KEY',   'Df]Z%.fp)`!oHc?n@q=nx#^UGEoRuP6{BmP^RN:[%*D@+S]+Qo6Eiyf}TcQxkO~i');
define('NONCE_KEY',       'WB6}/^c:</@Xzlb$Yj$q%NTJ;v2%X1(+)^f7U;ZD>0NkQ$3_{v$y>_F:N`32|f`9');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress.  A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de.mo to wp-content/languages and set WPLANG to 'de' to enable German
 * language support.
 */
define ('WPLANG', '');

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
