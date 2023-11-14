<?php
/**
 * Plugin Name: Carrousel
 * Author: Hydra
 * Author uri: https://github.com/Hydra-5w5/carrousel
 * Description: Permet d'afficher les images d'une galerie dans une boîte modale naviguable
 */

 function enfiler_script_css() 
 {
   $version_css = filemtime(plugin_dir_path(__FILE__) . 'style.css');
   $version_js = filemtime(plugin_dir_path(__FILE__) . 'js/carrousel-galerie.js');
   $version_js = filemtime(plugin_dir_path(__FILE__) . 'js/carrousel-profs.js');
   $version_js = filemtime(plugin_dir_path(__FILE__) . 'js/carrousel-temoignage.js');
   wp_enqueue_style('style_carrousel', plugin_dir_url(__FILE__) . 'style.css', array(), $version_css);
   wp_enqueue_script('js_carrousel-galerie', plugin_dir_url(__FILE__) . 'js/carrousel-galerie.js', array(), $version_js, true);
   wp_enqueue_script('js_carrousel-profs', plugin_dir_url(__FILE__) . 'js/carrousel-profs.js', array(), $version_js, true);
   wp_enqueue_script('js_carrousel-temoignage', plugin_dir_url(__FILE__) . 'js/carrousel-temoignage.js', array(), $version_js, true);
 }
 add_action('wp_enqueue_scripts', 'enfiler_script_css');
 
 function genere_boite() 
 {
   return '
     <div class="carrousel">
       <button class="carrousel__x">X</button>
       <button class="carrousel__gauche"><</button>
       <button class="carrousel__droite">></button>
       <figure class="carrousel__figure"></figure>
       <form class="carrousel__form"></form>
     </div>
   ';
 }
 add_shortcode('carrousel', 'genere_boite');