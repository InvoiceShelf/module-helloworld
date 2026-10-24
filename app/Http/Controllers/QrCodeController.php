<?php

declare(strict_types=1);

namespace Modules\HelloWorld\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Routing\Controller;
use Modules\HelloWorld\Support\QrCode;

final class QrCodeController extends Controller
{
    /** A QR code that opens Hello World on a phone. */
    public function __invoke(): JsonResponse
    {
        $target = url('/admin/modules/hello-world/dashboard');

        return response()->json([
            'target' => $target,
            'data_uri' => QrCode::svgDataUri($target),
        ]);
    }
}
