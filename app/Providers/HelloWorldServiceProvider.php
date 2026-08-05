<?php

namespace Modules\HelloWorld\Providers;

use InvoiceShelf\Modules\Support\ModuleServiceProvider;
use Modules\HelloWorld\Support\ModuleRegistration;

/**
 * Official reference module for the InvoiceShelf marketplace.
 */
class HelloWorldServiceProvider extends ModuleServiceProvider
{
    protected string $name = 'HelloWorld';

    protected string $nameLower = 'helloworld';

    public function boot(): void
    {
        parent::boot();

        ModuleRegistration::register(module_path($this->name));
    }
}
