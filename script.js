var map = L.map('map').setView([35.6, 139.5], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// 오다이바 마커
var markerOdaiba = L.marker([35.62750390393277, 139.77148816838488]).addTo(map);
var popupOdaiba = `
  <div style="width:200px;">
    <div class="popup-title">시오카제 공원</div>
    <img src="images/시오카제 공원.jpg" style="width:100%; border-radius:8px;" />
  </div>
`;
markerOdaiba.bindPopup(popupOdaiba);

// 오이시 공원 마커
var markerOishi = L.marker([35.52290400000001, 138.7457522]).addTo(map);
var popupOishi = `
  <div style="width:200px;">
    <div class="popup-title">오이시 공원</div>
    <img src="images/오이시공원.jpg" style="width:100%; border-radius:8px;" />
  </div>
`;
markerOishi.bindPopup(popupOishi);

// 신주쿠 공원 마커
var markerShinjukuPark = L.marker([35.52290400000001, 138.7457522]).addTo(map);
var popuShinjukuPark = `
  <div style="width:200px;">
    <div class="popup-title">신주쿠 공원</div>
    <img src="images/신주쿠공원.jpg" style="width:100%; border-radius:8px;" />
  </div>
`;
markerShinjukuPark.bindPopup(popupShinjukuPark);