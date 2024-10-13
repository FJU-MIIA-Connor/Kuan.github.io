let score = 0;
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0; /* 背景顏色 */
    text-align: center; /* 文字置中 */
}

h1 {
    color: #333; /* 標題顏色 */
    margin-top: 20px; /* 上方邊距 */
}

#quiz-container {
    margin: 20px auto; /* 中心對齊 */
    padding: 20px; /* 內邊距 */
    background-color: #fff; /* 白色背景 */
    border-radius: 10px; /* 圓角 */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* 陰影效果 */
    width: 80%; /* 寬度 */
    max-width: 600px; /* 最大寬度 */
}

.dog-image {
    width: 300px; /* 固定寬度 */
    height: 200px; /* 固定高度 */
    object-fit: cover; /* 保持比例並填滿 */
    border-radius: 10px; /* 圓角 */
    margin-bottom: 15px; /* 下方邊距 */
}

.option {
    margin: 5px; /* 按鈕間距 */
    padding: 10px 15px; /* 按鈕內邊距 */
    font-size: 16px; /* 字體大小 */
    background-color: #007bff; /* 按鈕背景顏色 */
    color: white; /* 字體顏色 */
    border: none; /* 無邊框 */
    border-radius: 5px; /* 圓角 */
    cursor: pointer; /* 鼠標指針效果 */
}

.option:hover {
    background-color: #0056b3; /* 懸停顏色 */
}

#result {
    margin-top: 15px; /* 顯示結果的上方邊距 */
    font-size: 18px; /* 字體大小 */
}
