<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $superadmin = Role::updateOrCreate([
            'name' => 'super admin'
        ], [
            'name' => 'super admin'
        ]);

        $admin = Role::updateOrCreate([
            'name' => 'admin'
        ], [
            'name' => 'admin'
        ]);

        $team = Role::updateOrCreate([
            'name' => 'team'
        ], [
            'name' => 'team'
        ]);

        $agent = Role::updateOrCreate([
            'name' => 'agent'
        ], [
            'name' => 'agent'
        ]);

        $customer = Role::updateOrCreate([
            'name' => 'customer'
        ], [
            'name' => 'customer'
        ]);


        $guest = Role::updateOrCreate([
            'name' => 'guest'
        ], [
            'name' => 'guest'
        ]);

        // PERMISSION
        // products
        $productPermission = [
            ['name' => 'viewProduct'],
            ['name' => 'createProduct'],
            ['name' => 'editProduct'],
            ['name' => 'showProduct'],
            ['name' => 'deleteProduct'],
        ];

        // category product
        $categoryPermission = [
            ['name' => 'viewCategory'],
            ['name' => 'createCategory'],
            ['name' => 'editCategory'],
            ['name' => 'deleteCategory'],
        ];

        // discount voucher
        $voucherPermission = [
            ['name' => 'viewVoucher'],
            ['name' => 'createVoucher'],
            ['name' => 'editVoucher'],
            ['name' => 'deleteVoucher'],
            ['name' => 'activateVoucher'],
            ['name' => 'inactivateVoucher'],
        ];

        $discountPermission = [
            ['name' => 'viewDiscount'],
            ['name' => 'createDiscount'],
            ['name' => 'editDiscount'],
            ['name' => 'deleteDiscount'],
            ['name' => 'activateDiscount'],
            ['name' => 'inactivateDiscount'],
        ];


        // order
        $orderPermission = [
            ['name' => 'viewOrder'],
            ['name' => 'showOrder'],
            ['name' => 'editOrder'],
            ['name' => 'printOrder']
        ];

        // article
        $articlePermission = [
            ['name' => 'viewArticle'],
            ['name' => 'createArticle'],
            ['name' => 'editArticle'],
            ['name' => 'deleteArticle'],
        ];

        // category article
        $categoryArticlePermission = [
            ['name' => 'viewCategoryArticle'],
            ['name' => 'createCategoryArticle'],
            ['name' => 'editCategoryArticle'],
            ['name' => 'deleteCategoryArticle'],
        ];

        // review and testimonial
        $testimonialPermission = [
            ['name' => 'viewTestimonial'],
            ['name' => 'createTestimonial'],
            ['name' => 'editTestimonial'],
            ['name' => 'deleteTestimonial'],
        ];

        // user management
        $userPermission = [
            ['name' => 'viewUser'],
            ['name' => 'createUser'],
            ['name' => 'editUser'],
            ['name' => 'deleteUser'],
        ];

        // report
        $reportPermission = [
            ['name' => 'viewReportSales'],
            ['name' => 'printReportSales'],
            ['name' => 'viewReportProductStoct'],
            ['name' => 'printReportProductStoct'],
        ];

        $allPermissions = array_merge(
            [['name' => 'viewDashboard']],
            $productPermission,
            $categoryPermission,
            $voucherPermission,
            $discountPermission,
            $orderPermission,
            $articlePermission,
            $categoryArticlePermission,
            $testimonialPermission,
            $userPermission,
            $reportPermission,
        );

        $teamPermissions = array_merge(
            [['name' => 'viewDashboard']],
            $productPermission,
            $categoryPermission,
            $voucherPermission,
            $discountPermission,
            $userPermission,
            $reportPermission,
        );

        $agentPermissions = [
            ['name' => 'viewDashboard'],
            ['name' => 'affiliateFeature']
        ];

        collect($allPermissions)->each(fn ($q) => Permission::create($q));
        collect([['name' => 'developer']])->each(fn ($q) => Permission::create($q));
        collect([['name' => 'affiliateFeature']])->each(fn ($q) => Permission::create($q));

        foreach ($allPermissions as $p) {
            $admin->givePermissionTo($p['name']);
        }

        foreach ($teamPermissions as $p) {
            $team->givePermissionTo($p['name']);
        }

        foreach ($agentPermissions as $p) {
            $agent->givePermissionTo($p['name']);
        }

        $adminUser = \App\Models\User::find(1);
        $adminUser->assignRole('super admin');
        $teamUser = \App\Models\User::find(2);
        $teamUser->assignRole('team');
        $agentUser = \App\Models\User::find(3);
        $agentUser->assignRole('agent');
        // $customerUser = \App\Models\User::find(4);
        // $customerUser->assignRole('customer');
        $dev1User = \App\Models\User::find(5);
        $dev1User->assignRole('admin');
        $dev2User = \App\Models\User::find(6);
        $dev2User->assignRole('admin');
    }
}
