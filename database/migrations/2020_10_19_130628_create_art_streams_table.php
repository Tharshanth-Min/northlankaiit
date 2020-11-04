<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateArtStreamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('art_streams', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('al_result_id');
            $table->string('tamil')->nullable();
            $table->string('hindu_culture')->nullable();
            $table->string('economics')->nullable();
            $table->string('politic')->nullable();
            $table->string('geographic')->nullable();
            $table->string('english')->nullable();
            $table->text('remark')->nullable();
            $table->timestamps();

            $table->foreign("al_result_id")
                ->references("id")
                ->on("al_results")
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
        Schema::dropIfExists('art_streams');
    }
}
