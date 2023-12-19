  // Responsive navigation toggle
  function toggleNav() {
    var nav = document.getElementById('main-nav');
    nav.classList.toggle('responsive');
  }

  // Toggle active class on selected navigation item
  document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.main-nav a');
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        links.forEach(function (el) {
          el.classList.remove('active');
        });
        this.classList.add('active');
      });
    });
  });

  // Tab switching function
  function switchTab(tabId) {
    var tabs = document.querySelectorAll('.dashboard section');
    tabs.forEach(function (tab) {
      tab.style.display = 'none';
    });

    var selectedTab = document.getElementById(tabId);
    if (selectedTab) {
      selectedTab.style.display = 'block';
    }
  }

  // Update patient status function
  function updatePatientStatus(newStatus) {
    var statusElement = document.getElementById('admissionStatus');
    if (statusElement) {
      statusElement.textContent = newStatus;
      statusElement.className = newStatus.toLowerCase() === 'admitted' ? 'admitted-status' : 'discharged-status';
    }
  }