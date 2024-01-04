<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('vouchers', function (Blueprint $table) {
            $table->id();
            $table->string('voucher_type')->default(\App\Enums\VoucherType::ONEPRODUCT);
            $table->foreignId('user_id')->constrained()->cascadeOnDelete();
            $table->string('code')->unique();
            $table->string('name')->nullable();
            $table->bigInteger('start_at')->nullable();
            $table->bigInteger('end_at')->nullable();
            $table->string('promo_type')->default(\App\Enums\PromoType::PRODUCT);
            $table->string('piece_type')->default(\App\Enums\PieceType::NOMINAL);
            $table->decimal('percentage', 5, 2)->nullable();
            $table->decimal('nominal', 12, 2)->nullable();
            $table->decimal('minimum_purchase', 12, 2)->nullable();
            $table->integer('quota')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('vouchers');
    }
};
