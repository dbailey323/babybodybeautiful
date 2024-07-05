function displayClassDates(className, startDate, numWeeks, timeSuffix, skippedWeeks = []) {
    const classDatesContainer = document.getElementById(`classDates${className}`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < numWeeks; i++) {
        if (skippedWeeks.includes(i + 1)) continue;
        
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + (i * 7));

        if (currentDate > today) {
            const formattedDate = currentDate.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
            const linkDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
            const link = `https://bookwhen.com/babybodybeautiful#focus=ev-${className}-${linkDate}${timeSuffix}`;
            classDatesContainer.innerHTML += `<a href="${link}" target="_blank"><small>${formattedDate}</small></a><span style="margin-right: 10px;"></span>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const classSchedules = [
        { className: "s1s8", startDate: "2024-07-24", numWeeks: 5, timeSuffix: "100000" },
        { className: "sk1q", startDate: "2024-07-24", numWeeks: 5, timeSuffix: "183000" },
        { className: "sur9", startDate: "2024-07-26", numWeeks: 5, timeSuffix: "093000" },
        { className: "s6iu", startDate: "2024-09-11", numWeeks: 6, timeSuffix: "183000" },
        { className: "sazv", startDate: "2024-09-11", numWeeks: 6, timeSuffix: "093000" },
        { className: "so4d", startDate: "2024-09-13", numWeeks: 6, timeSuffix: "093000" },
        { className: "svtl", startDate: "2024-09-11", numWeeks: 1, timeSuffix: "103000" }
    ];

    classSchedules.forEach(schedule => {
        displayClassDates(schedule.className, schedule.startDate, schedule.numWeeks, schedule.timeSuffix);
    });
});