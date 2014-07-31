<?php

class Evento extends Eloquent {
	protected $table = 'evento';
	protected $primaryKey = 'idEvento';
	public $timestamps = true;
}