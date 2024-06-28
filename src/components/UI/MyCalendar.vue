<template>
  <div class="calendar">
    <div class="calendar-header">
      <button @click="prevMonth">Предыдущий месяц</button>
      <h2>{{ currentMonthName }} {{ currentYear.value }}</h2>
      <button @click="nextMonth">Следующий месяц</button>
    </div>
    <div class="calendar-weekdays">
      <div v-for="day in weekdays" :key="day">{{ day }}</div>
    </div>
    <div class="calendar-days">
      <div 
        v-for="day in displayedDays"   
        :key="day"
        :class="{ 
          'calendar-day': true, 
          'current-day': day === currentDay.value,
          'disabled': day < 1 || day > lastDayOfMonth.value 
        }"
      >
        {{ day }}
      </div>
    </div>
    <div>
      <h2>{{currentMonthName}}</h2>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'

export default {
  setup() {
    const currentMonth = ref(new Date().getMonth()) 
    const currentYear = ref(new Date().getFullYear())
    const currentDay = ref(new Date().getDate())
    const days = ref([])
    const weekdays = ref(['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'])
    const firstDayOfMonth = ref(0)
    const lastDayOfMonth = ref(0)
    const months = ref(['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']);

    const getDaysInMonth = () => {
      const date = new Date(currentYear.value, currentMonth.value + 1, 0) 
      return date.getDate()
    }

    const currentMonthName = computed(() => {
      return months.value[currentMonth.value];
    });

    const prevMonth = () => {
      currentMonth.value--;
      if (currentMonth.value < 0) {
        currentMonth.value = 11;
        currentYear.value--;
      }
      updateCalendar()
    }

    const nextMonth = () => {
      currentMonth.value++;
      if (currentMonth.value > 11) {
        currentMonth.value = 0;
        currentYear.value++;
      }
      updateCalendar()
    }

    const updateCalendar = () => {
      const date = new Date(currentYear.value, currentMonth.value, 1)
      firstDayOfMonth.value = (date.getDay() + 6) % 7; 
      lastDayOfMonth.value = getDaysInMonth()
      days.value = Array.from({ length: lastDayOfMonth.value }, (_, i) => i + 1)
    }

    const displayedDays = computed(() => {
      const startDay = firstDayOfMonth.value;
      const endDay = lastDayOfMonth.value;
      const displayedDays = [];
      for (let i = -startDay; i < endDay; i++) {
        displayedDays.push(i + 1);
      }
      return displayedDays;
    });

    updateCalendar();

    // Обновление данных при загрузке компонента
    onMounted(() => {
      updateCalendar();
    });

    return {
      currentMonth,
      currentYear,
      currentDay,
      days,
      weekdays,
      firstDayOfMonth,
      lastDayOfMonth,
      prevMonth,
      nextMonth,
      months,
      currentMonthName,
      displayedDays
    }
  }
}
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
}

.calendar-day {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  border: 1px solid #ccc;
  grid-column: 1 / span 7;
}

.current-day {
  background-color: #eee;
}

.disabled {
  opacity: 0.5;
}
</style>