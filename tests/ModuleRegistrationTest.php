<?php

declare(strict_types=1);

namespace Modules\HelloWorld\Tests;

use InvoiceShelf\Modules\Registry;
use Modules\HelloWorld\Lifecycle\DataCleanup;
use Modules\HelloWorld\Support\ModuleRegistration;

final class ModuleRegistrationTest extends TestCase
{
    public function test_it_registers_a_local_script_sidebar_entry_and_settings_schema(): void
    {
        $modulePath = dirname(__DIR__);

        ModuleRegistration::register($modulePath);

        self::assertSame(realpath($modulePath.'/dist/init.js'), Registry::scriptFor('hello-world'));
        self::assertSame([
            'group' => 'modules',
            'group_label' => 'navigation.modules',
            'priority' => 100,
            'title' => 'helloworld::menu.title',
            'link' => '/admin/modules/hello-world/dashboard',
            'icon' => 'HandRaisedIcon',
        ], Registry::menuFor('hello-world'));

        $settings = Registry::settingsFor('hello-world');

        self::assertNotNull($settings);
        self::assertSame(
            ['greeting', 'recipient', 'show_emoji', 'tone', 'note'],
            array_column($settings->fields(), 'key'),
        );
        self::assertSame('Hello, world!', $settings->fields()[0]['default']);
    }

    public function test_its_data_cleanup_is_safe_to_repeat(): void
    {
        $cleanup = new DataCleanup;

        $cleanup->cleanup();
        $cleanup->cleanup();

        self::addToAssertionCount(1);
    }
}
