function displayClassDates(className, startDate, numWeeks, timeSuffix, skippedWeeks = []) {
    const classDatesContainer = document.getElementById(`classDates${className}`);
    if (!classDatesContainer) return; // Exit if container does not exist

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Ensure time is set to midnight for comparison

    const start = new Date(startDate);
    if (isNaN(start)) {
        console.error("Invalid startDate format. Use 'YYYY-MM-DD'.");
        return;
    }

    let content = ''; // Use a single string to accumulate HTML content

    for (let i = 0; i < numWeeks; i++) {
        if (skippedWeeks.includes(i + 1)) continue; // Skip the week if it's in the skippedWeeks array

        const currentDate = new Date(start);
        currentDate.setDate(start.getDate() + (i * 7)); // Calculate the date for the current week

        if (currentDate > today) { // Only display future dates
            const formattedDate = currentDate.toLocaleDateString("en-GB", { month: "short", day: "numeric" });
            const linkDate = `${currentDate.getFullYear()}${(currentDate.getMonth() + 1).toString().padStart(2, '0')}${currentDate.getDate().toString().padStart(2, '0')}`;
            const link = `https://bookwhen.com/babybodybeautiful#focus=ev-${className}-${linkDate}${timeSuffix}`;
            
            // Append content to the string
            content += `<a href="${link}" target="_blank"><small>${formattedDate}</small></a><span style="margin-right: 10px;"></span>`;
        }
    }

    classDatesContainer.innerHTML = content; // Update the DOM in one operation
}

document.addEventListener('DOMContentLoaded', function () {
    const classSchedules = [
        { className: "s6iu", startDate: "2024-09-11", numWeeks: 6, timeSuffix: "183000" },
        { className: "sazv", startDate: "2024-09-11", numWeeks: 6, timeSuffix: "093000" },
        { className: "s20q", startDate: "2024-09-11", numWeeks: 6, timeSuffix: "093000" },
        { className: "svtl", startDate: "2024-09-11", numWeeks: 1, timeSuffix: "103000" },
        { className: "s0ih", startDate: "2024-10-30", numWeeks: 8, timeSuffix: "093000" },
        { className: "sbo0", startDate: "2024-10-30", numWeeks: 8, timeSuffix: "103000" },
        { className: "saxh", startDate: "2024-10-30", numWeeks: 8, timeSuffix: "183000" },
        { className: "syh4", startDate: "2024-11-01", numWeeks: 1, timeSuffix: "094500" },
        { className: "sqke", startDate: "2024-09-13", numWeeks: 6, timeSuffix: "094500" },
        { className: "sm5o", startDate: "2024-11-05", numWeeks: 7, timeSuffix: "141500" },
        { className: "sqa1", startDate: "2024-11-04", numWeeks: 1, timeSuffix: "114500" },
        { className: "sp6v", startDate: "2024-11-05", numWeeks: 1, timeSuffix: "131500" }
    ];

    classSchedules.forEach(schedule => {
        displayClassDates(schedule.className, schedule.startDate, schedule.numWeeks, schedule.timeSuffix);
    });
});
