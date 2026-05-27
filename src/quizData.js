export const QUESTIONS = [
  {
    id: 1,
    emoji: '🌱',
    question: 'Mẹ đang ở tuần thai thứ mấy rồi ạ?',
    subtitle: 'Tuần thai giúp Bé Mầm biết thời điểm thích hợp nhất',
    multi: false,
    options: [
      { id: 'under9',  emoji: '⏳', label: 'Dưới 9 tuần',         sub: 'Sắp đến thời điểm phù hợp' },
      { id: 'week9',   emoji: '✅', label: 'Từ 9 tuần trở lên',    sub: 'Có thể thực hiện iNIPT' },
      { id: 'unsure',  emoji: '💭', label: 'Chưa chắc chắn',       sub: 'Cần tư vấn thêm' },
    ],
  },
  {
    id: 2,
    emoji: '👶',
    question: 'Mẹ đang mang thai đơn hay song thai?',
    subtitle: 'Để Bé Mầm gợi ý đúng nhóm gói nhé',
    multi: false,
    options: [
      { id: 'single',  emoji: '🌿',   label: 'Thai đơn',  sub: null },
      { id: 'twins',   emoji: '🌿🌿', label: 'Song thai', sub: 'Có gói riêng cho song thai' },
      { id: 'dunno',   emoji: '💭',   label: 'Chưa rõ',   sub: null },
    ],
  },
  {
    id: 3,
    emoji: '🔍',
    question: 'Mẹ mong muốn kiểm tra ở mức độ nào?',
    subtitle: null,
    multi: false,
    options: [
      { id: 'basic',    emoji: '💚', label: 'Cơ bản, tiết kiệm',                    sub: 'Sàng lọc NST thường gặp' },
      { id: 'standard', emoji: '💙', label: 'Tiêu chuẩn, dễ lựa chọn',              sub: 'Phổ biến nhất' },
      { id: 'recessive',emoji: '🧬', label: 'Muốn kiểm tra thêm gene lặn cho mẹ',   sub: 'Thêm 25 gene di truyền lặn' },
      { id: 'advanced', emoji: '🔬', label: 'Chuyên sâu — IVF / thai quý / tiền sử',sub: 'Toàn diện nhất' },
    ],
  },
  {
    id: 4,
    emoji: '💛',
    question: 'Mẹ có yếu tố nào cần theo dõi kỹ hơn không?',
    subtitle: 'Có thể chọn nhiều',
    multi: true,
    options: [
      { id: 'ivf',     emoji: '⚕️', label: 'IVF / Thai quý' },
      { id: 'age35',   emoji: '🌸', label: 'Mẹ trên 35 tuổi' },
      { id: 'history', emoji: '📋', label: 'Tiền sử thai lưu / sảy thai / con bất thường' },
      { id: 'family',  emoji: '🧬', label: 'Gia đình có tiền sử bệnh di truyền' },
      { id: 'none',    emoji: '✨', label: 'Không có / Chưa rõ' },
    ],
  },
];

/* ─── Recommendation logic ─── */
export function recommend(ans) {
  const { q1, q2, q3, q4 = [] } = ans;

  // Under 9 weeks
  if (q1 === 'under9' || q1 === 'unsure') {
    return {
      pkg:      q1 === 'unsure' ? 'Cần xác nhận tuần thai' : 'Chưa đến thời điểm phù hợp',
      subtitle: q1 === 'unsure'
        ? 'Mẹ cần siêu âm xác định tuần thai trước'
        : 'iNIPT có thể thực hiện từ tuần thai thứ 9',
      reason:   q1 === 'unsure'
        ? 'Để Bé Mầm gợi ý chính xác nhất, mẹ cần biết tuần thai hiện tại. Mẹ có thể để lại thông tin để được tư vấn thời điểm phù hợp.'
        : 'iNIPT nên thực hiện từ tuần thai thứ 9 trở lên để đảm bảo nồng độ cfDNA đủ cao. Mẹ hãy để lại thông tin — Invivo Lab sẽ nhắc mẹ khi đến thời điểm!',
      perks:    ['Thông báo nhắc nhở khi đủ tuần thai', 'Tư vấn gói trước để chuẩn bị', 'Đăng ký trước nhận ưu đãi'],
      color:    'from-amber-50 to-orange-50',
      badge:    '⏳ Sắp đến thời điểm',
      badgeColor: 'bg-amber-100 text-amber-700 border-amber-200',
      icon:     '🌱',
      early:    true,
    };
  }

  // Twins
  if (q2 === 'twins') {
    const plus = q3 === 'recessive' || q3 === 'advanced' || q4.includes('family') || q4.includes('ivf') || q4.includes('history');
    return {
      pkg:      plus ? 'iNIPT Twins+' : 'iNIPT Twins',
      subtitle: plus ? 'Song thai · Kèm 25 gene lặn' : 'Gói chuyên biệt cho song thai',
      reason:   `Vì mẹ đang mang song thai, ${plus ? 'iNIPT Twins+' : 'iNIPT Twins'} được thiết kế riêng cho thai đôi — đảm bảo kết quả chính xác và toàn diện${plus ? ', đồng thời bao gồm 25 gene bệnh di truyền lặn cho mẹ' : ''}.`,
      perks:    plus
        ? ['Tối ưu cho mẫu cfDNA song thai', 'Sàng lọc đủ 3 NST thường gặp (T21,T18,T13)', 'Bao gồm NST giới tính', 'Kèm 25 gene bệnh di truyền lặn']
        : ['Tối ưu cho mẫu cfDNA song thai', 'Sàng lọc T21, T18, T13 và NST giới tính', 'Tặng kèm xét nghiệm vi chất thiết yếu', 'Thời gian trả kết quả 5–7 ngày'],
      color:    'from-purple-50 to-blue-50',
      badge:    '👶👶 Dành cho song thai',
      badgeColor: 'bg-purple-100 text-purple-700 border-purple-200',
      icon:     '💜',
    };
  }

  const highRisk = q3 === 'advanced'
    || q4.includes('ivf') || q4.includes('history')
    || q4.includes('age35');
  const wantGene = q3 === 'recessive' || q4.includes('family');

  // High risk → Pro+
  if (highRisk && wantGene) {
    return {
      pkg:      'iNIPT Pro+',
      subtitle: 'Gói chuyên sâu toàn diện nhất',
      reason:   'Với các yếu tố nguy cơ cần theo dõi kỹ, iNIPT Pro+ là lựa chọn toàn diện nhất: sàng lọc 23 NST, 90 vi mất/lặp đoạn và 25 gene bệnh di truyền lặn cho mẹ.',
      perks:    ['Sàng lọc toàn bộ 23 cặp NST', '90 vi mất/lặp đoạn chuyên sâu', 'Kèm 25 gene bệnh di truyền lặn', 'Hỗ trợ chọc ối đến 5.500.000 VNĐ'],
      color:    'from-blue-50 to-indigo-50',
      badge:    '🔬 Chuyên sâu',
      badgeColor: 'bg-indigo-100 text-indigo-700 border-indigo-200',
      icon:     '💙',
    };
  }

  if (highRisk) {
    return {
      pkg:      'iNIPT 23+',
      subtitle: 'Gói mở rộng — phù hợp khi có yếu tố nguy cơ',
      reason:   'Với tiền sử hoặc yếu tố nguy cơ cần theo dõi thêm, iNIPT 23+ mở rộng sàng lọc đến 23 cặp nhiễm sắc thể và kèm 25 gene bệnh di truyền lặn cho mẹ.',
      perks:    ['Mở rộng sàng lọc 23 cặp NST', 'Bao gồm tất cả NST giới tính', 'Kèm 25 gene bệnh di truyền lặn', 'Hỗ trợ chọc ối đến 4.500.000 VNĐ'],
      color:    'from-sky-50 to-blue-50',
      badge:    '🔍 Mở rộng',
      badgeColor: 'bg-sky-100 text-sky-700 border-sky-200',
      icon:     '🔵',
    };
  }

  if (wantGene) {
    return {
      pkg:      'iNIPT 7+',
      subtitle: '⭐ Gói được khuyến nghị nhiều nhất',
      reason:   'iNIPT 7+ là lựa chọn cân bằng tối ưu: sàng lọc bất thường NST thường gặp và nhóm NST giới tính, đồng thời bao gồm 25 gene bệnh di truyền lặn cho mẹ.',
      perks:    ['Sàng lọc T21, T18, T13 (Down, Edwards, Patau)', 'Bao gồm 4 nhóm NST giới tính', 'Kèm 25 gene bệnh di truyền lặn', 'Phù hợp đa số mẹ bầu'],
      color:    'from-emerald-50 to-teal-50',
      badge:    '⭐ Khuyến nghị',
      badgeColor: 'bg-emerald-100 text-emerald-700 border-emerald-200',
      icon:     '💚',
      recommended: true,
    };
  }

  if (q3 === 'basic') {
    return {
      pkg:      'iNIPT 3',
      subtitle: 'Gói cơ bản, tiết kiệm',
      reason:   'Gói iNIPT 3 sàng lọc 3 bất thường NST thường gặp nhất (Down T21, Edwards T18, Patau T13) — phù hợp với mẹ muốn kiểm tra cơ bản với chi phí tối ưu.',
      perks:    ['Sàng lọc Down (T21), Edwards (T18), Patau (T13)', 'Độ đặc hiệu 99,9%', 'Tặng kèm xét nghiệm vi chất cơ bản', 'Trả kết quả 5–7 ngày'],
      color:    'from-green-50 to-emerald-50',
      badge:    '💚 Cơ bản',
      badgeColor: 'bg-green-100 text-green-700 border-green-200',
      icon:     '🟢',
    };
  }

  // Default: standard → iNIPT 7
  return {
    pkg:      'iNIPT 7',
    subtitle: 'Gói tiêu chuẩn — dễ lựa chọn',
    reason:   'iNIPT 7 bao phủ đầy đủ các bất thường NST thường gặp và nhóm NST giới tính — lựa chọn tiêu chuẩn phổ biến nhất, tặng kèm xét nghiệm vi chất thiết yếu cho mẹ.',
    perks:    ['Sàng lọc T21, T18, T13 và 4 nhóm NST giới tính', 'Tặng kèm xét nghiệm vi chất thiết yếu', 'Độ đặc hiệu 99,9%', 'Trả kết quả 5–7 ngày'],
    color:    'from-blue-50 to-sky-50',
    badge:    '💙 Tiêu chuẩn',
    badgeColor: 'bg-blue-100 text-blue-700 border-blue-200',
    icon:     '🔵',
  };
}

export const GENES_25 = [
  { group: '🩸 Thalassemia & Hemoglobin', items: [
    { stt:1, disease:'Tan máu bẩm sinh thể Alpha (Alpha Thalassemia)', gene:'HBA1', note:'Phát hiện mất đoạn hoặc đột biến gen α-globin.' },
    { stt:2, disease:'Tan máu bẩm sinh thể Alpha (Alpha Thalassemia)', gene:'HBA2', note:'Phát hiện mất đoạn hoặc đột biến gen α-globin.' },
    { stt:3, disease:'Tan máu bẩm sinh thể Beta (Beta Thalassemia)',   gene:'HBB',  note:'Phát hiện đột biến gây giảm hoặc mất tổng hợp chuỗi β-globin.' },
  ]},
  { group: '🔬 Rối loạn chuyển hóa', items: [
    { stt:4,  disease:'Thiếu men G6PD', gene:'G6PD', note:'Phát hiện đột biến làm giảm enzyme G6PD gây tán huyết.' },
    { stt:5,  disease:'Phenylketone niệu (PKU)', gene:'PAH', note:'Phát hiện đột biến làm giảm hoạt tính enzyme phenylalanine hydroxylase.' },
    { stt:6,  disease:'Rối loạn chuyển hóa Galactose (Galactosemia)', gene:'GALT', note:'Phát hiện đột biến gây thiếu hụt enzyme galactose-1-phosphate uridylyltransferase.' },
    { stt:7,  disease:'Vàng da ứ mật do thiếu hụt Citrin', gene:'SLC25A13', note:'Phát hiện đột biến gây thiếu hụt citrin, rối loạn chuyển hóa acid amin và ammoniac.' },
    { stt:8,  disease:'Rối loạn dự trữ glycogen loại II (Bệnh Pompe)', gene:'GAA', note:'Phát hiện đột biến gây thiếu enzyme acid α-glucosidase.' },
    { stt:9,  disease:'Rối loạn chuyển hóa đồng (Bệnh Wilson)', gene:'ATP7B', note:'Phát hiện đột biến gây tích tụ đồng trong gan và não.' },
    { stt:11, disease:'Tăng axit Glutaric máu loại II', gene:'ETFDH', note:'Rối loạn vận chuyển điện tử, rối loạn chuyển hóa acid béo.' },
    { stt:22, disease:'Thiếu hụt Ornithine transcarbamylase (OTC deficiency)', gene:'OTC', note:'Rối loạn chu trình ure, tích tụ ammoniac.' },
  ]},
  { group: '🧬 Bệnh tích tụ lysosome & thần kinh', items: [
    { stt:10, disease:'Bệnh Tay-Sachs', gene:'HEXA', note:'Thiếu enzyme hexosaminidase A, tích tụ GM2 ganglioside trong não.' },
    { stt:12, disease:'Bệnh Fabry', gene:'GLA', note:'Đột biến gen α-galactosidase A.' },
    { stt:19, disease:'Niemann-Pick type A/B', gene:'SMPD1', note:'Thiếu enzyme phân giải sphingomyelin.' },
    { stt:21, disease:'Adrenoleukodystrophy', gene:'ABCD1', note:'Rối loạn vận chuyển peroxisomal.' },
    { stt:20, disease:'Teo cơ tủy sống kèm suy hô hấp (SMARD1)', gene:'IGHMBP2', note:'Tổn thương tế bào thần kinh vận động alpha.' },
    { stt:23, disease:'Bệnh khô da sắc tố nhóm C, D', gene:'ERCC2', note:'Ảnh hưởng protein XPD và phức hợp TFIIH.' },
  ]},
  { group: '🫁 Nội tiết & Bẩm sinh', items: [
    { stt:13, disease:'Rối loạn phát triển giới tính (thiếu 5α-reductase)', gene:'SRD5A2', note:'Giảm enzyme chuyển testosterone thành DHT.' },
    { stt:14, disease:'Bệnh xơ nang (CF)', gene:'CFTR', note:'Rối loạn bài tiết chất nhầy ở phổi và tụy.' },
    { stt:15, disease:'Tăng sản tuyến thượng thận bẩm sinh', gene:'CYP21A2', note:'Mất chức năng enzyme 21-hydroxylase.' },
    { stt:16, disease:'Suy giáp bẩm sinh', gene:'TSHR', note:'Ảnh hưởng sản xuất hormone tuyến giáp.' },
    { stt:17, disease:'Hội chứng Pendred', gene:'SLC26A4', note:'Điếc bẩm sinh kết hợp rối loạn tuyến giáp.' },
    { stt:18, disease:'Thiếu hụt Carnitine nguyên phát', gene:'SLC22A5', note:'Rối loạn vận chuyển carnitine qua màng.' },
  ]},
  { group: '💉 Rối loạn đông máu', items: [
    { stt:24, disease:'Hemophilia A (Máu khó đông A)', gene:'F8', note:'Đột biến gen yếu tố VIII gây chảy máu kéo dài.' },
    { stt:25, disease:'Hemophilia B (Máu khó đông B)', gene:'F9', note:'Đột biến gen yếu tố IX gây rối loạn đông máu.' },
  ]},
];
