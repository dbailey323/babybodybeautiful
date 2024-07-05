function displayClassDates(className, startDate, numWeeks, timeSuffix, skippedWeeks = []) {
    const classDatesContainer = document.getElementById(`classDates${className}`);
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < numWeeks; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(currentDate.getDate() + (i * 7));
        const nextDay = new Date(currentDate);
        nextDay.setDate(currentDate.getDate() + 1);

        if (!skippedWeeks.includes(i + 1) && nextDay > today) {
            const formattedDate = currentDate.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
            const linkDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
            const link = `https://bookwhen.com/babybodybeautiful#focus=ev-${className}-${linkDate}${timeSuffix}`;
            classDatesContainer.innerHTML += `<a href="${link}" target="_blank"><small>${formattedDate}</small></a><span style="margin-right: 10px;"></span>`;
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    displayClassDates("s1s8", "2024-07-24", 5, "100000");
    displayClassDates("sk1q", "2024-07-24", 5, "183000");
    displayClassDates("sur9", "2024-07-26", 5, "093000");
    displayClassDates("s6iu", "2024-09-11", 6, "183000");
    displayClassDates("sazv", "2024-09-11", 6, "093000");
    displayClassDates("so4d", "2024-09-13", 6, "093000");
    displayClassDates("svtl", "2024-09-11", 1, "103000");
});
