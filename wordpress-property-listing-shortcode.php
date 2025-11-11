<?php
/**
 * Property Listing Shortcode for WordPress
 * 
 * Usage: Paste JSON into a custom field called "property_listing_json"
 * Then add this shortcode to your page: [property_listing]
 * 
 * Or use it inline: [property_listing json='{"title":"...",...}']
 * 
 * Installation:
 * 1. Add this code to your theme's functions.php file
 * 2. Add the CSS to your theme's style.css or custom CSS section
 */

function property_listing_shortcode($atts) {
    // Get attributes
    $atts = shortcode_atts(array(
        'json' => '', // JSON can be passed directly
        'field' => 'property_listing_json', // Or read from custom field
    ), $atts);
    
    // Get JSON data
    $json_data = '';
    
    if (!empty($atts['json'])) {
        // JSON passed directly in shortcode
        $json_data = $atts['json'];
    } else {
        // Try to get from custom field
        $json_data = get_post_meta(get_the_ID(), $atts['field'], true);
    }
    
    // If still no JSON, try to get from post content
    if (empty($json_data)) {
        global $post;
        $content = $post->post_content;
        
        // Try to extract JSON from content
        if (preg_match('/{[\s\S]*}/', $content, $matches)) {
            $json_data = $matches[0];
        }
    }
    
    if (empty($json_data)) {
        return '<p style="color:red;">No property listing data found. Please add JSON to the "property_listing_json" custom field.</p>';
    }
    
    // Decode JSON
    $listing = json_decode($json_data, true);
    
    if (!$listing) {
        return '<p style="color:red;">Error parsing JSON data. Please check the format.</p>';
    }
    
    // Format price
    $price = '$' . number_format($listing['price']);
    
    // Start output buffer
    ob_start();
    ?>
    
    <div class="property-listing-container">
        <!-- Hero Section -->
        <div class="property-hero" style="background-image: url('<?php echo esc_url($listing['heroPhoto']['url']); ?>');">
            <div class="property-hero-overlay">
                <div class="property-hero-content">
                    <h1 class="property-title"><?php echo esc_html($listing['title']); ?></h1>
                    <p class="property-price"><?php echo esc_html($price); ?></p>
                </div>
            </div>
        </div>
        
        <div class="property-content-wrapper">
            <div class="property-main-content">
                <!-- Quick Stats -->
                <div class="property-stats-card">
                    <div class="property-stats-grid">
                        <div class="property-stat">
                            <span class="stat-label">Beds</span>
                            <span class="stat-value"><?php echo esc_html($listing['beds']); ?></span>
                        </div>
                        <div class="property-stat">
                            <span class="stat-label">Baths</span>
                            <span class="stat-value"><?php echo esc_html($listing['baths']); ?></span>
                        </div>
                        <div class="property-stat">
                            <span class="stat-label">Living Area</span>
                            <span class="stat-value"><?php echo esc_html(number_format($listing['livingAreaSqFt'])); ?></span>
                            <span class="stat-unit">sq ft</span>
                        </div>
                        <div class="property-stat">
                            <span class="stat-label">Lot Size</span>
                            <span class="stat-value"><?php echo esc_html(number_format($listing['lotSizeSqFt'])); ?></span>
                            <span class="stat-unit">sq ft</span>
                        </div>
                    </div>
                    <div class="property-details-footer">
                        <p>
                            <strong>Built:</strong> <?php echo esc_html($listing['yearBuilt']); ?>
                            <span class="separator">•</span>
                            <strong>Type:</strong> <?php echo esc_html($listing['propertyType']); ?>
                        </p>
                        <p>
                            <strong>Address:</strong>
                            <?php echo esc_html($listing['address']['streetAddress']); ?>,
                            <?php echo esc_html($listing['address']['addressLocality']); ?>,
                            <?php echo esc_html($listing['address']['addressRegion']); ?>
                            <?php echo esc_html($listing['address']['postalCode']); ?>
                        </p>
                    </div>
                </div>
                
                <!-- Story Description -->
                <div class="property-card">
                    <h2>About This Property</h2>
                    <p class="property-story"><?php echo esc_html($listing['storyIntro']); ?></p>
                </div>
                
                <!-- Features -->
                <div class="property-card">
                    <h2>Key Features</h2>
                    <ul class="property-features-list">
                        <?php foreach ($listing['features'] as $feature): ?>
                            <li class="property-feature">
                                <svg class="feature-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                </svg>
                                <span><?php echo esc_html($feature); ?></span>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                
                <!-- Photo Gallery -->
                <?php if (!empty($listing['gallery'])): ?>
                <div class="property-card">
                    <h2>Photo Gallery</h2>
                    <div class="property-gallery">
                        <?php foreach ($listing['gallery'] as $photo): ?>
                            <div class="gallery-item">
                                <img src="<?php echo esc_url($photo['url']); ?>" 
                                     alt="<?php echo esc_attr($photo['alt']); ?>" 
                                     loading="lazy">
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <?php endif; ?>
                
                <!-- Neighborhood -->
                <div class="property-card">
                    <h2>About <?php echo esc_html($listing['neighborhoodName']); ?></h2>
                    <h3>Points of Interest</h3>
                    <ul class="property-poi-list">
                        <?php foreach ($listing['pointsOfInterest'] as $poi): ?>
                            <li class="property-poi">
                                <svg class="poi-icon" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                                </svg>
                                <span><?php echo esc_html($poi['name']); ?> - <?php echo esc_html($poi['minutesAway']); ?> min away</span>
                            </li>
                        <?php endforeach; ?>
                    </ul>
                </div>
                
                <!-- Video Transcript -->
                <?php if (!empty($listing['videoTranscript'])): ?>
                <div class="property-card">
                    <h2>Video Transcript</h2>
                    <p class="property-transcript"><?php echo nl2br(esc_html($listing['videoTranscript'])); ?></p>
                </div>
                <?php endif; ?>
            </div>
            
            <!-- Sidebar - Agent Contact -->
            <div class="property-sidebar">
                <div class="property-agent-card">
                    <h2>Contact Agent</h2>
                    <div class="agent-info">
                        <p class="agent-name"><?php echo esc_html($listing['agent']['name']); ?></p>
                        <p class="agent-title"><?php echo esc_html($listing['agent']['jobTitle']); ?></p>
                        <p class="agent-company"><?php echo esc_html($listing['agent']['brokerage']['name']); ?></p>
                    </div>
                    <div class="agent-contact">
                        <a href="tel:<?php echo esc_attr($listing['agent']['phone']); ?>" class="agent-contact-link">
                            <svg class="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                            </svg>
                            <?php echo esc_html($listing['agent']['phone']); ?>
                        </a>
                        <a href="mailto:<?php echo esc_attr($listing['agent']['email']); ?>" class="agent-contact-link">
                            <svg class="contact-icon" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                            <?php echo esc_html($listing['agent']['email']); ?>
                        </a>
                    </div>
                    <div class="agent-cta-buttons">
                        <a href="<?php echo esc_url($listing['cta']['scheduleUrl']); ?>" class="btn btn-primary">
                            Schedule Showing
                        </a>
                        <a href="<?php echo esc_url($listing['cta']['requestReportUrl']); ?>" class="btn btn-secondary">
                            Request Report
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Schema.org JSON-LD for SEO -->
        <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "<?php echo $listing['propertyType'] === 'Condo' ? 'Apartment' : 'SingleFamilyResidence'; ?>",
            "name": "<?php echo esc_js($listing['title']); ?>",
            "description": "<?php echo esc_js($listing['storyIntro']); ?>",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "<?php echo esc_js($listing['address']['streetAddress']); ?>",
                "addressLocality": "<?php echo esc_js($listing['address']['addressLocality']); ?>",
                "addressRegion": "<?php echo esc_js($listing['address']['addressRegion']); ?>",
                "postalCode": "<?php echo esc_js($listing['address']['postalCode']); ?>",
                "addressCountry": "<?php echo esc_js($listing['address']['addressCountry']); ?>"
            },
            <?php if (!empty($listing['coordinates'])): ?>
            "geo": {
                "@type": "GeoCoordinates",
                "latitude": <?php echo floatval($listing['coordinates']['latitude']); ?>,
                "longitude": <?php echo floatval($listing['coordinates']['longitude']); ?>
            },
            <?php endif; ?>
            "numberOfBedrooms": <?php echo intval($listing['beds']); ?>,
            "numberOfBathroomsTotal": <?php echo floatval($listing['baths']); ?>,
            "floorSize": {
                "@type": "QuantitativeValue",
                "value": <?php echo intval($listing['livingAreaSqFt']); ?>,
                "unitCode": "FTK"
            },
            "offers": {
                "@type": "Offer",
                "price": <?php echo intval($listing['price']); ?>,
                "priceCurrency": "USD"
            }
        }
        </script>
    </div>
    
    <?php
    return ob_get_clean();
}
add_shortcode('property_listing', 'property_listing_shortcode');

// Also register as a Gutenberg block (optional)
function register_property_listing_block() {
    if (!function_exists('register_block_type')) {
        return;
    }
    
    register_block_type('custom/property-listing', array(
        'render_callback' => 'property_listing_shortcode',
    ));
}
add_action('init', 'register_property_listing_block');
?>

