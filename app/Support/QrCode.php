<?php

declare(strict_types=1);

namespace Modules\HelloWorld\Support;

use chillerlan\QRCode\Output\QRMarkupSVG;
use chillerlan\QRCode\QRCode as QRCodeRenderer;
use chillerlan\QRCode\QROptions;

/**
 * Renders a QR code with chillerlan/php-qrcode.
 *
 * The host does not ship that package, so Hello World bundles it in bundle/
 * (see the README's "Dependency management"). Nothing here differs from
 * using the package in any PHP project: the host loads bundled classes after
 * its own, from bundle/classmap.php.
 */
final class QrCode
{
    /** An SVG data URI an <img> can show directly. */
    public static function svgDataUri(string $text): string
    {
        $options = new QROptions([
            'outputInterface' => QRMarkupSVG::class,
            'outputBase64' => true,
            'addQuietzone' => true,
        ]);

        return (new QRCodeRenderer($options))->render($text);
    }
}
