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
    displayClassDates("s5jy", "2024-05-01", 10, "100000", [7,8,9]);
    displayClassDates("sih1", "2024-05-01", 10, "183000", [7,8,9]);
    displayClassDates("si9s", "2024-05-03", 9, "093000", [6,7]);
    displayClassDates("sflf", "2024-05-03", 5, "100000");
    displayClassDates("succ", "2024-07-26", 5, "100000");
});
