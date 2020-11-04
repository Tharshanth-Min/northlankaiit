<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMathStreamsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('math_streams', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('al_result_id');
            $table->string('combined_mathematics')->nullable();
            $table->string('physics')->nullable();
            $table->string('chemistry')->nullable();
            $table->string('information_technology')->nullable();
            $table->string('english')->nullable();
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
        Schema::dropIfExists('math_streams');
    }
}
