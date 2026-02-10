/**
 * 校舎リスト設定ファイル
 * 
 * ============================================================
 * 【運用開始前】
 *   nameを正式な校舎名に書き換えてください。
 *   例: { id: 'school1', name: '東京本校' },
 * 
 * 【注意】
 *   - id は変更しないでください（データベースと紐づいています）
 *   - name は自由に変更できます（表示用）
 *   - 校舎を追加する場合は school16, school17... と続けてください
 * ============================================================
 */

const SCHOOLS = [
    { id: 'school1', name: '東京校(とうきょうこう)' },
    { id: 'school2', name: '大阪校(おおさかこう)' },
    { id: 'school3', name: '神戸校(こうべこう)' },
    { id: 'school4', name: '福岡校(ふくおかこう)' },
    { id: 'school5', name: '横浜校(よこはまこう)' },
    { id: 'school6', name: '名古屋校(なごやこう)' },
    { id: 'school7', name: '〇〇校' },
    // ↓ 16校目以降はここに追加
    // { id: 'school16', name: '校舎16' },
];

// グローバルにエクスポート（ブラウザ用）
if (typeof window !== 'undefined') {
    window.SCHOOLS = SCHOOLS;
}

// Node.js用エクスポート（将来の拡張用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SCHOOLS };
}
