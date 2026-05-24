export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'Mẹ đang ở tuần thai thứ mấy rồi ạ?',
    emoji: '🌱',
    options: [
      { id: 'under10', label: 'Dưới 10 tuần', icon: '⏳' },
      { id: 'over10', label: 'Từ 10 tuần trở lên', icon: '✅' },
      { id: 'unsure', label: 'Chưa chắc chắn', icon: '💭' },
    ],
  },
  {
    id: 2,
    question: 'Mẹ đang mang thai đơn hay song thai?',
    emoji: '👶',
    options: [
      { id: 'single', label: 'Thai đơn', icon: '🌿' },
      { id: 'twins', label: 'Song thai', icon: '🌿🌿' },
      { id: 'unknown', label: 'Chưa rõ', icon: '💭' },
    ],
  },
  {
    id: 3,
    question: 'Mẹ mong muốn kiểm tra ở mức nào?',
    emoji: '🔍',
    options: [
      { id: 'basic', label: 'Cơ bản, tiết kiệm', icon: '💚' },
      { id: 'standard', label: 'Tiêu chuẩn, dễ lựa chọn', icon: '💙' },
      { id: 'recessive', label: 'Muốn kiểm tra thêm gene lặn cho mẹ', icon: '🧬' },
      { id: 'advanced', label: 'Chuyên sâu (IVF / thai quý / tiền sử bất thường)', icon: '🔬' },
    ],
  },
  {
    id: 4,
    question: 'Mẹ có yếu tố nào cần theo dõi kỹ hơn không?',
    emoji: '💛',
    multi: true,
    options: [
      { id: 'ivf', label: 'IVF / Thai quý', icon: '⚕️' },
      { id: 'age35', label: 'Mẹ trên 35 tuổi', icon: '🌸' },
      { id: 'history', label: 'Tiền sử thai lưu / sảy thai / con bất thường', icon: '📋' },
      { id: 'family', label: 'Gia đình có tiền sử bệnh di truyền', icon: '🧬' },
      { id: 'none', label: 'Không có / Chưa rõ', icon: '✨' },
    ],
  },
];

export function getRecommendation(answers) {
  const { q1, q2, q3, q4 = [] } = answers;

  if (q1 === 'under10') {
    return {
      pkg: 'Chờ thêm chút nữa nhé!',
      subtitle: 'Mẹ có thể thực hiện iNIPT từ tuần thai thứ 10',
      reason: 'iNIPT có thể thực hiện an toàn từ tuần thai thứ 10 trở đi. Để lại thông tin, Invivo Lab sẽ nhắc nhở mẹ khi đến thời điểm phù hợp.',
      color: 'from-amber-50 to-orange-50',
      badge: '⏳ Sắp đến thời điểm',
      badgeColor: 'bg-amber-100 text-amber-700',
      early: true,
    };
  }

  if (q2 === 'twins') {
    const plus = q3 === 'recessive' || q3 === 'advanced' || q4.includes('family') || q4.includes('ivf');
    return {
      pkg: plus ? 'iNIPT Twins+' : 'iNIPT Twins',
      subtitle: plus ? 'Gói song thai kèm 25 gene lặn' : 'Gói chuyên biệt cho song thai',
      reason: `Vì mẹ đang mang song thai, Invivo Lab khuyến nghị gói ${plus ? 'iNIPT Twins+' : 'iNIPT Twins'} — được thiết kế riêng cho thai song, đảm bảo kết quả chính xác và toàn diện.`,
      color: 'from-purple-50 to-blue-50',
      badge: '👶👶 Song thai',
      badgeColor: 'bg-purple-100 text-purple-700',
    };
  }

  const hasHighRisk = q4.includes('ivf') || q4.includes('history') || q4.includes('family') || q3 === 'advanced';
  const wantsRecessive = q3 === 'recessive' || q4.includes('family');

  if (hasHighRisk) {
    return {
      pkg: 'iNIPT Pro+',
      subtitle: 'Gói chuyên sâu — đánh giá toàn diện nhất',
      reason: 'Với các yếu tố cần theo dõi kỹ hơn, gói iNIPT Pro+ cho phép sàng lọc mở rộng nhất, bao gồm vi mất/lặp đoạn và 25 gene bệnh di truyền lặn — hỗ trợ bác sĩ tư vấn toàn diện nhất.',
      color: 'from-blue-50 to-indigo-50',
      badge: '🔬 Chuyên sâu',
      badgeColor: 'bg-blue-100 text-brand-blue',
    };
  }

  if (wantsRecessive) {
    return {
      pkg: 'iNIPT 7+',
      subtitle: '★ Gói được khuyến nghị nhiều nhất',
      reason: 'iNIPT 7+ là lựa chọn cân bằng tối ưu: sàng lọc các bất thường nhiễm sắc thể thường gặp và nhóm NST giới tính, đồng thời bao gồm 25 gene bệnh di truyền lặn cho mẹ.',
      color: 'from-emerald-50 to-teal-50',
      badge: '⭐ Khuyến nghị',
      badgeColor: 'bg-emerald-100 text-emerald-700',
      recommended: true,
    };
  }

  if (q3 === 'basic') {
    return {
      pkg: 'iNIPT 3',
      subtitle: 'Gói cơ bản, tiết kiệm',
      reason: 'Gói iNIPT 3 sàng lọc 3 bất thường nhiễm sắc thể thường gặp nhất (T21, T18, T13) — phù hợp với mẹ bầu muốn kiểm tra cơ bản với chi phí tối ưu.',
      color: 'from-green-50 to-emerald-50',
      badge: '💚 Cơ bản',
      badgeColor: 'bg-green-100 text-green-700',
    };
  }

  return {
    pkg: 'iNIPT 7+',
    subtitle: '★ Gói được khuyến nghị nhiều nhất',
    reason: 'iNIPT 7+ là lựa chọn cân bằng cho đa số mẹ bầu: bao phủ các bất thường NST thường gặp, nhóm NST giới tính, và kèm 25 gene bệnh di truyền lặn cho mẹ.',
    color: 'from-sky-50 to-blue-50',
    badge: '⭐ Khuyến nghị',
    badgeColor: 'bg-sky-100 text-sky-700',
    recommended: true,
  };
}

export const GENES_25 = [
  { group: '🩸 Thalassemia & Hemoglobin', items: [
    { stt: 1, disease: 'Tan máu bẩm sinh thể Alpha (Alpha Thalassemia)', gene: 'HBA1', note: 'Phát hiện mất đoạn hoặc đột biến gen α-globin.' },
    { stt: 2, disease: 'Tan máu bẩm sinh thể Alpha (Alpha Thalassemia)', gene: 'HBA2', note: 'Phát hiện mất đoạn hoặc đột biến gen α-globin.' },
    { stt: 3, disease: 'Tan máu bẩm sinh thể Beta (Beta Thalassemia)', gene: 'HBB', note: 'Phát hiện đột biến gây giảm hoặc mất tổng hợp chuỗi β-globin.' },
  ]},
  { group: '🔬 Rối loạn chuyển hóa', items: [
    { stt: 4, disease: 'Thiếu men G6PD', gene: 'G6PD', note: 'Phát hiện đột biến làm giảm enzyme G6PD gây tán huyết.' },
    { stt: 5, disease: 'Phenylketone niệu (PKU)', gene: 'PAH', note: 'Phát hiện đột biến làm giảm hoạt tính enzyme phenylalanine hydroxylase.' },
    { stt: 6, disease: 'Rối loạn chuyển hóa Galactose (Galactosemia)', gene: 'GALT', note: 'Phát hiện đột biến gây thiếu hụt enzyme galactose-1-phosphate uridylyltransferase.' },
    { stt: 7, disease: 'Vàng da ứ mật do thiếu hụt Citrin', gene: 'SLC25A13', note: 'Phát hiện đột biến gây thiếu hụt citrin.' },
    { stt: 8, disease: 'Rối loạn dự trữ glycogen loại II (Bệnh Pompe)', gene: 'GAA', note: 'Phát hiện đột biến gây thiếu enzyme acid α-glucosidase.' },
    { stt: 9, disease: 'Rối loạn chuyển hóa đồng (Bệnh Wilson)', gene: 'ATP7B', note: 'Phát hiện đột biến gây tích tụ đồng trong gan và não.' },
    { stt: 11, disease: 'Tăng axit Glutaric máu loại II', gene: 'ETFDH', note: 'Rối loạn vận chuyển điện tử, rối loạn chuyển hóa acid béo.' },
    { stt: 22, disease: 'Thiếu hụt Ornithine transcarbamylase (OTC deficiency)', gene: 'OTC', note: 'Rối loạn chu trình ure, tích tụ ammoniac.' },
  ]},
  { group: '🧬 Bệnh tích tụ lysosome & thần kinh', items: [
    { stt: 10, disease: 'Bệnh Tay-Sachs', gene: 'HEXA', note: 'Thiếu enzyme hexosaminidase A, tích tụ GM2 ganglioside trong não.' },
    { stt: 12, disease: 'Bệnh Fabry', gene: 'GLA', note: 'Đột biến gen α-galactosidase A.' },
    { stt: 19, disease: 'Niemann-Pick type A/B', gene: 'SMPD1', note: 'Thiếu enzyme phân giải sphingomyelin.' },
    { stt: 21, disease: 'Adrenoleukodystrophy', gene: 'ABCD1', note: 'Rối loạn vận chuyển peroxisomal.' },
    { stt: 20, disease: 'Teo cơ tủy sống kèm suy hô hấp (SMARD1)', gene: 'IGHMBP2', note: 'Tổn thương tế bào thần kinh vận động alpha.' },
    { stt: 23, disease: 'Bệnh khô da sắc tố nhóm C, D', gene: 'ERCC2', note: 'Ảnh hưởng protein XPD và phức hợp TFIIH.' },
  ]},
  { group: '🫁 Nội tiết & Bẩm sinh', items: [
    { stt: 13, disease: 'Rối loạn phát triển giới tính (thiếu 5α-reductase)', gene: 'SRD5A2', note: 'Giảm enzyme chuyển testosterone thành DHT.' },
    { stt: 14, disease: 'Bệnh xơ nang (CF)', gene: 'CFTR', note: 'Rối loạn bài tiết chất nhầy ở phổi và tụy.' },
    { stt: 15, disease: 'Tăng sản tuyến thượng thận bẩm sinh', gene: 'CYP21A2', note: 'Mất chức năng enzyme 21-hydroxylase.' },
    { stt: 16, disease: 'Suy giáp bẩm sinh', gene: 'TSHR', note: 'Ảnh hưởng sản xuất hormone tuyến giáp.' },
    { stt: 17, disease: 'Hội chứng Pendred', gene: 'SLC26A4', note: 'Điếc bẩm sinh kết hợp rối loạn tuyến giáp.' },
    { stt: 18, disease: 'Thiếu hụt Carnitine nguyên phát', gene: 'SLC22A5', note: 'Rối loạn vận chuyển carnitine qua màng.' },
  ]},
  { group: '💉 Rối loạn đông máu', items: [
    { stt: 24, disease: 'Hemophilia A (Máu khó đông A)', gene: 'F8', note: 'Đột biến gen yếu tố VIII gây chảy máu kéo dài.' },
    { stt: 25, disease: 'Hemophilia B (Máu khó đông B)', gene: 'F9', note: 'Đột biến gen yếu tố IX gây rối loạn đông máu.' },
  ]},
];
