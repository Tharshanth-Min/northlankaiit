<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateNewsImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('news_images', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('news_id');
            $table->string("image")->nullable();
            $table->string("image_name")->nullable();
            $table->string("image_size")->nullable();
            $table->date("modified_at")->nullable();
            $table->string("modified_by")->nullable();
            $table->timestamps();

            $table->foreign("news_id")
                ->references("id")
                ->on("news")
                ->onDelete("cascade");

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('news_images');
    }
}
