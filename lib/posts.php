<?php

	class Posts {

		private $page = 1;
		private $postcount = 10;
		private $posts = array();
		private $paginated_posts = array();
		private $posts_folder = '../posts/';

		public function __construct ($page, $postcount) {
			$this->__set('page', $page);
			$this->__set('postcount', $postcount);

			$this->get_all_posts();
			$this->filter_posts();
		}

		// Generic getter and setter
		public function __get($property) {
			if (property_exists($this, $property)) {
				return $this->$property;
			}
		}

		public function __set($property, $value) {
			if (property_exists($this, $property)) {
				$this->$property = $value;
			}

			return $this;
		}

		protected function get_all_posts () {
			$dirHandle = opendir($this->posts_folder);

			while ($file = readdir($dirHandle)) {
				if (is_dir($this->posts_folder . $file) && $file != '.' && $file != '..') {
					$this->posts[] = $this->posts_folder . $file . '/';
				}
			}
		}

		protected function filter_posts () {
			$start = ($this->page - 1) * ($this->postcount - 1);
			$end = $start + $this->pagecount;

			for ($i = $start; $i <= $end; $i++) {
				$this->paginated_posts[] = new Post($this->posts[$i]);
			}
		}

		public function pagecount () {
			$pages = count($this->posts) / $this->postcount;

			if ($pages < 1) {
				return 1;
			}

			return ceil($pages);
		}
	}