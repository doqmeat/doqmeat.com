
// Calendar configuration
const calendarConfig = {
	showNav: true, // Show month navigation? true or false
	prevLabel: "❮", // Symbol for the Prev month link
	nextLabel: "❯", // Symbol for the Next month link
	locale: "es", // Change to "de", "fr", etc. if needed
	weekStartsOn: 0, // 0 = Sunday, 1 = Monday
};

// this replaces events
const logPosts = {
  
    "2024-10-25": {
      "text": "look back",
      "url": "/journal/241025.html"
    },
  
    "2024-10-31": {
      "text": "happy halloween!",
      "url": "/journal/241031.html"
    },
  
    "2024-11-23": {
      "text": "my new furry friend: steve + laptop jumpscare",
      "url": "/journal/241123.html"
    },
  
    "2024-12-16": {
      "text": "1st year of uni done!",
      "url": "/journal/241216.html"
    },
  
    "2025-01-01": {
      "text": "i am tired, but also a bit joyful",
      "url": "/journal/250101.html"
    },
  
    "2025-01-20": {
      "text": "winter break wrap-up",
      "url": "/journal/250120.html"
    },
  
    "2025-01-23": {
      "text": "2nd year of uni",
      "url": "/journal/250123.html"
    },
  
    "2025-03-01": {
      "text": "a lot happening",
      "url": "/journal/250301.html"
    },
  
    "2025-03-03": {
      "text": "i need to let go of spotify",
      "url": "/journal/250303.html"
    },
  
    "2025-04-11": {
      "text": "this is like the equivalent of someone not talking for a week and then talking for 5 hours straight",
      "url": "/journal/250411.html"
    },
  
    "2025-04-20": {
      "text": "walking steve minecraft outside",
      "url": "/journal/250420.html"
    },
  
    "2025-05-26": {
      "text": "recap of uni semester + summer plans",
      "url": "/journal/250526.html"
    },
  
    "2025-06-01": {
      "text": "my beautiful madoka dics",
      "url": "/journal/250601.html"
    },
  
    "2025-06-18": {
      "text": "PS5 thoughts: 1 month in",
      "url": "/journal/250618.html"
    },
  
    "2025-07-06": {
      "text": "my 5th sickening of the year",
      "url": "/journal/250706.html"
    },
  
    "2025-07-25": {
      "text": "to be seen",
      "url": "/journal/250725.html"
    },
  
    "2025-09-25": {
      "text": "my 4th uni semester",
      "url": "/journal/250925.html"
    },
  
    "2025-11-25": {
      "text": "connection",
      "url": "/journal/251125.html"
    },
  
    "2025-12-15": {
      "text": "winter break starts!",
      "url": "/journal/251215.html"
    },
  
    "2026-01-01": {
      "text": "looking back on 2025",
      "url": "/journal/260110.html"
    },
  
    "2026-02-01": {
      "text": "now hosting on nekoweb!",
      "url": "/journal/260201.html"
    },
  
    "2026-02-20": {
      "text": "computer architecture is kicking my ass",
      "url": "/journal/260220.html"
    },
  
    "2026-06-28": {
      "text": "re-touching everything around here + life update",
      "url": "/journal/260628.html"
    }
  
};

// Recurring events every year (e.g. birthdays)
const recurringEvents = {
	"01-01": { icon: "🎉", text: "new years" },
	"04-13": { icon: "✨", text: "doqmeat website anniversary" },
	"10-31": { icon: "🎃", text: "halloween" },
};

// Weekday headers
function getWeekdays(startDay = 0) {
	const days = ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"];
	return days.slice(startDay).concat(days.slice(0, startDay));
}

const calendarGrid = document.getElementById("calendar");
const navigationBar = document.getElementById("calendar-nav");

let currentDate = new Date();

// Utility to create HTML elements for the calendar
const createElement = (tag, text = "", className = "") => {
	const element = document.createElement(tag);

	if (text) element.textContent = text;
	if (className) element.className = className;
	return element;
};

// Main function to build the calendar
function buildCalendar(date) {
	calendarGrid.innerHTML = "";
	navigationBar.innerHTML = "";

	const year = date.getFullYear();
	const month = date.getMonth();
	const today = new Date();

	// Get localized month name
	const monthName = date.toLocaleString(calendarConfig.locale || "en", {
		month: "long",
	});

	// Create title and navigation buttons
	const titleElement = createElement("div", `${monthName} ${year}`, "");
	titleElement.id = "calendar-title";

	if (calendarConfig.showNav) {
		const prevButton = createElement("button", calendarConfig.prevLabel);
		prevButton.onclick = () => changeMonth(-1);

		const nextButton = createElement("button", calendarConfig.nextLabel);
		nextButton.onclick = () => changeMonth(1);

		navigationBar.append(prevButton, titleElement, nextButton);
	} else {
		navigationBar.appendChild(titleElement);
	}

	// Add weekday headers
	getWeekdays(calendarConfig.weekStartsOn).forEach((day) =>
		calendarGrid.appendChild(createElement("div", day, "weekday")),
	);

	let firstDay = new Date(year, month, 1).getDay();
	firstDay = (firstDay - calendarConfig.weekStartsOn + 7) % 7;
	const daysInMonth = new Date(year, month + 1, 0).getDate();
	const daysInPrevMonth = new Date(year, month, 0).getDate();

	const totalCells = firstDay + daysInMonth;
	const totalWeeks = Math.ceil(totalCells / 7);
	const neededCells = totalWeeks * 7;

	// Fill in previous month days (greyed out)
	for (let i = firstDay - 1; i >= 0; i--) {
		const day = daysInPrevMonth - i;
		const dayCell = createElement("div", "", "day adjacent-month");
		const container = createElement("div", "", "number-container");

		container.textContent = day;
		dayCell.appendChild(container);
		calendarGrid.appendChild(dayCell);
	}

	// Fill in current month days
	for (let day = 1; day <= daysInMonth; day++) {
		const dayCell = createElement("div", "", "day");

		const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
		const recurringKey = `${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
		const container = createElement("div", "", "number-container");

		// Check for event (specific or recurring)
		const event = logPosts[dateString] || recurringEvents[recurringKey];

		if (event) {
			const iconTag = event.url ? "a" : "span";
			const iconSpan = createElement(iconTag, "", "event-icon");
			iconSpan.innerHTML = event.icon || day;

			if (event.url) {
				dayCell.classList.add("log");
				iconSpan.href = event.url;
				iconSpan.title = event.text;
			}

      container.appendChild(iconSpan);
		} else {
			container.textContent = day;
		}

		dayCell.appendChild(container);

		// Highlight current day
		if (
			day === today.getDate() &&
			month === today.getMonth() &&
			year === today.getFullYear()
		) {
			dayCell.classList.add("current-day");
		}

		calendarGrid.appendChild(dayCell);
	}

	// Fill in next month days to complete row
	const filledCells = calendarGrid.querySelectorAll(".day").length;
	const nextMonthDays = neededCells - filledCells;

	for (let day = 1; day <= nextMonthDays; day++) {
		const dayCell = createElement("div", "", "day adjacent-month");
		const container = createElement("div", "", "number-container");

		container.textContent = day;
		dayCell.appendChild(container);
		calendarGrid.appendChild(dayCell);
	}
}

// Function to change calendar month
function changeMonth(offset) {
	currentDate.setMonth(currentDate.getMonth() + offset);
	buildCalendar(currentDate);
}

// Show the calendar on page load
buildCalendar(currentDate);