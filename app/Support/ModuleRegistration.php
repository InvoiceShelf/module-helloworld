<?php

declare(strict_types=1);

namespace Modules\HelloWorld\Support;

use InvoiceShelf\Modules\Registry;

final class ModuleRegistration
{
    public static function register(string $modulePath): void
    {
        Registry::registerScript('hello-world', $modulePath.'/dist/init.js');

        Registry::registerMenu('hello-world', [
            'title' => 'helloworld::menu.title',
            'link' => '/admin/modules/hello-world/dashboard',
            'icon' => 'HandRaisedIcon',
        ]);

        Registry::registerSettings('hello-world', [
            'sections' => [
                [
                    'title' => 'helloworld::settings.greeting_section',
                    'fields' => [
                        [
                            'key' => 'greeting',
                            'type' => 'text',
                            'label' => 'helloworld::settings.greeting',
                            'rules' => ['required', 'max:120'],
                            'default' => 'Hello, world!',
                        ],
                        [
                            'key' => 'recipient',
                            'type' => 'text',
                            'label' => 'helloworld::settings.recipient',
                            'rules' => ['max:60'],
                            'default' => 'friend',
                        ],
                        [
                            'key' => 'show_emoji',
                            'type' => 'switch',
                            'label' => 'helloworld::settings.show_emoji',
                            'default' => true,
                        ],
                    ],
                ],
                [
                    'title' => 'helloworld::settings.style_section',
                    'fields' => [
                        [
                            'key' => 'tone',
                            'type' => 'select',
                            'label' => 'helloworld::settings.tone',
                            'rules' => ['required'],
                            'default' => 'friendly',
                            'options' => [
                                'friendly' => 'Friendly',
                                'formal' => 'Formal',
                                'enthusiastic' => 'Enthusiastic',
                            ],
                        ],
                        [
                            'key' => 'note',
                            'type' => 'textarea',
                            'label' => 'helloworld::settings.note',
                            'rules' => ['max:500'],
                        ],
                    ],
                ],
            ],
        ]);
    }
}
