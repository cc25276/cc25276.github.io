document.addEventListener('DOMContentLoaded', () => {
    const fileNames = document.querySelectorAll('.file-name');
    const downloadPopup = document.getElementById('download-popup');
    const downloadFileNameSpan = document.getElementById('download-file-name');
    const confirmDownloadButton = document.getElementById('confirm-download');
    const cancelDownloadButton = document.getElementById('cancel-download');

    let currentFilePath = ''; // ダウンロードするファイルのパスを一時的に保持

    // ファイル名がクリックされた時の処理
    fileNames.forEach(fileNameElement => {
        fileNameElement.addEventListener('click', () => {
            currentFilePath = fileNameElement.dataset.filePath; // data-file-pathからパスを取得
            const fileName = fileNameElement.textContent; // ファイル名テキストを取得

            downloadFileNameSpan.textContent = fileName; // ポップアップにファイル名を表示
            downloadPopup.style.display = 'flex'; // ポップアップを表示
        });
    });

    // ダウンロードボタンがクリックされた時の処理
    confirmDownloadButton.addEventListener('click', () => {
        if (currentFilePath) {
            // ダウンロードを実行
            const link = document.createElement('a');
            link.href = currentFilePath;
            link.download = downloadFileNameSpan.textContent; // ポップアップに表示されたファイル名をダウンロード名とする
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // ポップアップを閉じる
            downloadPopup.style.display = 'none';
            currentFilePath = ''; // パスをリセット
        }
    });

    // キャンセルボタンがクリックされた時の処理
    cancelDownloadButton.addEventListener('click', () => {
        downloadPopup.style.display = 'none'; // ポップアップを閉じる
        currentFilePath = ''; // パスをリセット
    });

    // ポップアップの背景をクリックしても閉じないように、クリックイベントはボタンにのみ設定
});
