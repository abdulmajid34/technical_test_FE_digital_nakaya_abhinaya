<script setup lang="ts"></script>

<template>
  <nav class="navbar navbar-expand-lg bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand text-light fw-bold ps-4" href="#">News Media</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-flex justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-light fw-bold" aria-current="page" href="#">All</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" href="#">Business</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" href="#">Entertainment</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" href="#">General</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" href="#">Health</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" href="#">Science</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" href="#">Sports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" href="#">Technology</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light fw-bold" href="#">
              <i class="bi bi-bookmark-fill"></i>
              Saves News
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
