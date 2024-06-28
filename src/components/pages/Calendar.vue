<template>
  <div class="calendar">
    <div class="calendar-header">
      <h2>{{ currentMonthName }} {{ currentYear }}</h2>
      <button @click="prevMonth">Предыдущий</button>
      <button @click="nextMonth">Следующий</button>
    </div>
    <div class="calendar-weekdays">
      <div v-for="day in weekdays" :key="day">{{ day }}</div>
    </div>
    <div class="calendar-days">
      <div 
        v-for="(day, index) in displayedDays"   
        :key="day"
        :class="{ 
          'calendar-day': true, 
          'current-day': day === currentDay,
          'disabled': day < 1 || day > lastDayOfMonth 
        }"
        :style="{ gridRow: Math.floor(index / 7) + 1, gridColumn: (index % 7) + 1 }"
      >
        {{ day }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      weekdays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
      currentMonth: new Date().getMonth(),
      currentYear: new Date().getFullYear(),
      currentDay: new Date().getDate(),
      days: [],
      firstDayOfMonth: 0,
      lastDayOfMonth: 0,
    };
  },
  computed: {
    currentMonthName() {
      return this.months[this.currentMonth];
    },
    displayedDays() {
      const startDay = this.firstDayOfMonth;
      const endDay = this.lastDayOfMonth;
      const displayedDays = [];
      for (let i = -startDay; i < endDay; i++) {
        displayedDays.push(i + 1);
      }
      return displayedDays;
    },
  },
  methods: {
    getDaysInMonth() {
      const date = new Date(this.currentYear, this.currentMonth + 1, 0);
      return date.getDate();
    },
    prevMonth() {
      this.currentMonth--;
      if (this.currentMonth < 0) {
        this.currentMonth = 11;
        this.currentYear--;
      }
      this.updateCalendar();
    },
    nextMonth() {
      this.currentMonth++;
      if (this.currentMonth > 11) {
        this.currentMonth = 0;
        this.currentYear++;
      }
      this.updateCalendar();
    },
    updateCalendar() {
      const date = new Date(this.currentYear, this.currentMonth, 1);
      this.firstDayOfMonth = (date.getDay() + 6) % 7;
      this.lastDayOfMonth = this.getDaysInMonth();
      this.days = Array.from({ length: this.lastDayOfMonth }, (_, i) => i + 1);
    },
  },
  mounted() {
    this.updateCalendar();
  },
};
</script>

<style scoped>
.calendar {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 5px;
  width: 350px;
  margin: 20px auto;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  grid-column: 1 / span 7;
}

.calendar-weekdays {
  display: flex;
  justify-content: space-between;
  grid-column: 1 / span 7;
}

.calendar-days {
  grid-column: 1 / span 7;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
}


.calendar-day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px solid #ccc;
}

.current-day {
  background-color: #eee;
}

.disabled {
  opacity: 0.5;
}
</style>