window.function = function (html, fileName) {
    html = html.value ?? "No HTML set.";
    fileName = fileName.value ?? "file";

    // Contoh: Membuat file Excel dengan satu sheet dan satu cell
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet([[html]]);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    // Mengubah array buffer menjadi file Excel
    const blob = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const url = URL.createObjectURL(blob);

    return url;
};
