---
layout: default
title: Home
---

<!-- About Section -->
<section id="about" class="text-center max-w-3xl mx-auto px-4">
  {% include about-intro.html %}
</section>

<!-- Business Hours -->
<section class="text-center max-w-3xl mx-auto px-4 mt-12">
  {% include business-hours.html %}
</section>

<!-- Optional: Live Open/Closed Status -->
<script>
  const now = new Date();
  const day = now.getDay(); // 0 = Sunday
  const table = document.getElementById("hours-table");
  const rows = table.querySelectorAll("tr");

  rows.forEach(row => {
    const rowDay = parseInt(row.getAttribute("data-day"));
    if (rowDay === day) {
      const hoursText = row.cells[1].textContent.trim();
      let open = false;
      if (hoursText.toLowerCase() !== "closed") {
        const times = hoursText.split(",");
        const currentMinutes = now.getHours()*60 + now.getMinutes();
        times.forEach(range => {
          const [start,end] = range.split("–").map(t=>{
            const [h,m] = t.trim().split(":");
            return parseInt(h)*60 + parseInt(m);
          });
          if(currentMinutes >= start && currentMinutes <= end) open = true;
        });
      }
      row.classList.add(open ? "bg-green-600" : "bg-red-600");
      row.cells[1].textContent += open ? " – Open Now" : " – Closed Now";
    }
  });
</script>