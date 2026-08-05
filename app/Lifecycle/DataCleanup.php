<?php

declare(strict_types=1);

namespace Modules\HelloWorld\Lifecycle;

use InvoiceShelf\Modules\Contracts\DataCleanup as DataCleanupContract;

/**
 * Removes persistent resources that are not owned by module migrations.
 */
final class DataCleanup implements DataCleanupContract
{
    public function cleanup(): void
    {
        // Hello World does not create persistent resources.
    }
}
