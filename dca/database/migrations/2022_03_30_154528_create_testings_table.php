<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestingsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('testings', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('jobid');
            $table->string('availability');
            $table->string('other_status');
            $table->string('usage');
            $table->string('other_places');
            $table->string('connection_status');
            $table->string('remarks');
            $table->string('field_officer');
            $table->string('meter_number');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('testings');
    }
};
