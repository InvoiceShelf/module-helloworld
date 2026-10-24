<?php

declare(strict_types=1);

namespace Modules\HelloWorld\Tests;

use Illuminate\Support\Facades\Route;
use Modules\HelloWorld\Support\QrCode;

final class QrCodeTest extends TestCase
{
    public function test_it_renders_an_svg_data_uri_with_the_bundled_package(): void
    {
        $uri = QrCode::svgDataUri('https://invoiceshelf.test/admin/modules/hello-world/dashboard');

        self::assertStringStartsWith('data:image/svg+xml;base64,', $uri);
        self::assertStringContainsString('<svg', (string) base64_decode(substr($uri, strlen('data:image/svg+xml;base64,')), true));
    }

    public function test_its_route_sits_behind_the_host_api_stack(): void
    {
        Route::group([], dirname(__DIR__).'/routes/api.php');

        Route::getRoutes()->refreshNameLookups();
        $route = Route::getRoutes()->getByName('hello-world.qr');

        self::assertNotNull($route);
        self::assertSame('api/v1/hello-world/qr', $route->uri());
        self::assertSame(['api', 'auth:sanctum', 'company', 'bouncer'], $route->middleware());
    }
}
