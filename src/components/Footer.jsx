import React from "react";

export default function Footer() {
  return (
    <footer class="bg-green-400 -mx-24 px-24 py-20 text-white text-lg">
      <div class="container mx-auto">
        <div class="sm:flex mb-4">
          <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
            <img src="/assets/images/logo.png" alt="" class="mb-3" />
            <p class="font-light">
              Membantu orang yang <br />
              kurang mampu dan membutuhkan
            </p>
          </div>
          <div class="sm:w-1/4 h-auto">
            <div class="mb-8 font-bold">Jelajahi</div>
            <ul class="font-light">
              <li class="mb-3">Layanan</li>
              <li class="mb-3">Keamanan</li>
              <li class="mb-3">Pengembalian</li>
              <li class="mb-3">Saham</li>
            </ul>
          </div>
          <div class="sm:w-1/4 h-auto">
            <div class="mb-8 font-bold">Donatur</div>
            <ul class="font-light">
              <li class="mb-3">Akun Saya</li>
              <li class="mb-3">Top Donatur</li>
              <li class="mb-3">Cara Donasi</li>
              <li class="mb-3">Bantuan</li>
            </ul>
          </div>
          <div class="sm:w-1/4 h-auto">
            <div class="mb-8 font-bold">Kantor</div>
            <ul class="font-light">
              <li class="mb-3">+021 2345 2000</li>
              <li class="mb-3">Kb.Sleman, No.12 (Yogyakarta)</li>
              <li class="mb-3">support@berkah.id</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
