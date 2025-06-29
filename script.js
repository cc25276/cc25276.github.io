document.addEventListener('DOMContentLoaded', () => {
    const loginContainer = document.getElementById('login-container');
    const loginForm = document.getElementById('login-form');
    const studentIdInput = document.getElementById('studentId');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const mainContent = document.getElementById('main-content');

    // !!! 警告 !!!
    // ここにIDとパスワードをハードコードします。
    // この情報は、ブラウザの開発者ツールを使えば誰にでも見えてしまいます。
    // セキュリティが極めて低いため、機密性の高い情報には絶対に使用しないでください。
    //
    // 学籍番号は複数設定可能です。共通パスワードは一つです。
    const VALID_STUDENT_IDS = ['2023001', '2023002', '2023003', '2024001']; // 例: 許可する学籍番号のリスト
    const SHARED_PASSWORD = 'your_super_secret_password_here'; // ここにあなたの決める共通パスワードを設定

    // ページがロードされたときにログイン状態をチェック（今回は常にログイン画面を表示）
    // 将来的に「一度ログインしたらセッション中は表示しない」などの機能を追加する場合、ここにロジックを書きます。
    // しかし、それもやはりクライアントサイドなのでセキュリティ上の問題は残ります。

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // フォームのデフォルト送信（ページ遷移）を防止

        const enteredId = studentIdInput.value;
        const enteredPassword = passwordInput.value;

        // IDとパスワードをチェック
        if (VALID_STUDENT_IDS.includes(enteredId) && enteredPassword === SHARED_PASSWORD) {
            // 認証成功
            loginContainer.style.display = 'none'; // ログイン画面を隠す
            mainContent.style.display = 'block'; // メインコンテンツを表示
            errorMessage.style.display = 'none'; // エラーメッセージを隠す
            
            // オプション: パスワードを自動的にクリア
            passwordInput.value = ''; 
        } else {
            // 認証失敗
            errorMessage.style.display = 'block'; // エラーメッセージを表示
            passwordInput.value = ''; // パスワード入力をクリア
        }
    });
});
