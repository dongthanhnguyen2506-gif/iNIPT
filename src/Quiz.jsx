import { useState, useRef, useEffect } from 'react';
import BeMam from './BeMam';
import { QUESTIONS, recommend } from './quizData';

/* ── Option button ── */
function Option({ opt, selected, onClick }) {
  return (
    <button
      onClick={() => onClick(opt.id)}
      className={`quiz-opt ${selected ? 'active' : ''}`}
      aria-pressed={selected}
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl w-8 text-center flex-shrink-0 leading-none select-none">
          {opt.emoji}
        </span>
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-sm leading-snug">{opt.label}</div>
          {opt.sub && <div className="text-[11px] text-slate-400 mt-0.5">{opt.sub}</div>}
        </div>
        {/* Checkmark */}
        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center
          transition-all duration-200
          ${selected ? 'border-brand-blue bg-brand-blue' : 'border-slate-200'}`}>
          {selected && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
          )}
        </div>
      </div>
    </button>
  );
}

/* ── Result card ── */
function Result({ result, onReset, onCTA }) {
  const scrollToForm = () => document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className={`rounded-3xl bg-gradient-to-br ${result.color} border border-white/80 p-6 sm:p-8 animate-scale-in`}
      style={{ boxShadow: '0 8px 40px -8px rgba(21,101,192,0.15)' }}>

      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <BeMam size={64} state={result.early ? 'wave' : 'celebrate'} showBubble={false}/>
        <div className="flex-1 min-w-0">
          <span className={`inline-flex items-center text-[11px] font-bold px-3 py-1 rounded-full border mb-2 ${result.badgeColor}`}>
            {result.badge}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">{result.pkg}</h3>
          <p className="text-sm text-slate-500 font-semibold mt-0.5">{result.subtitle}</p>
        </div>
      </div>

      {/* Reason */}
      <div className="bg-white/70 rounded-2xl p-4 mb-4 border border-white">
        <p className="text-sm text-slate-700 leading-relaxed">
          <span className="font-bold text-brand-blue">Bé Mầm gợi ý: </span>
          {result.reason}
        </p>
      </div>

      {/* Perks */}
      <div className="flex flex-col gap-2 mb-5">
        {result.perks.map((p, i) => (
          <div key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
            <span className="w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
            </span>
            <span>{p}</span>
          </div>
        ))}
      </div>

      {/* Price note */}
      <div className="text-xs text-slate-400 bg-white/60 rounded-xl px-4 py-2.5 mb-5 leading-relaxed border border-slate-100">
        💬 Invivo Lab sẽ tư vấn bảng giá và chính sách hỗ trợ phù hợp theo từng trường hợp cụ thể của mẹ.
      </div>

      {/* CTAs */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={scrollToForm} className="btn-primary flex-1 py-3.5 justify-center">
          Nhận tư vấn chi tiết
        </button>
        <button onClick={onReset}
          className="flex-1 py-3.5 rounded-full border-2 border-slate-200 text-slate-500
          font-semibold text-sm hover:bg-white transition-all text-center">
          ↩ Làm lại câu hỏi
        </button>
      </div>
    </div>
  );
}

/* ── Main Quiz ── */
export default function Quiz() {
  const [phase, setPhase]       = useState('intro'); // intro | question | thinking | result
  const [step, setStep]         = useState(0);
  const [answers, setAnswers]   = useState({});
  const [selections, setSelections] = useState([]);
  const [result, setResult]     = useState(null);
  const [transitioning, setT]   = useState(false);
  const quizRef = useRef(null);

  const q = QUESTIONS[step];
  const total = QUESTIONS.length;

  const scrollHere = () =>
    quizRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const handleStart = () => {
    setPhase('question');
    setStep(0);
    setAnswers({});
    setSelections([]);
    setResult(null);
    setTimeout(scrollHere, 100);
  };

  const handleSelect = (id) => {
    if (!q) return;
    if (q.multi) {
      if (id === 'none') { setSelections(['none']); return; }
      setSelections(prev => {
        const without = prev.filter(x => x !== 'none');
        return without.includes(id)
          ? without.filter(x => x !== id)
          : [...without, id];
      });
    } else {
      setSelections([id]);
    }
  };

  const handleNext = () => {
    if (!selections.length) return;
    const key = `q${step + 1}`;
    const val  = q.multi ? selections : selections[0];
    const newAns = { ...answers, [key]: val };
    setAnswers(newAns);

    setT(true);
    setTimeout(() => {
      if (step < total - 1) {
        setStep(s => s + 1);
        setSelections([]);
        setT(false);
      } else {
        setPhase('thinking');
        setTimeout(() => {
          setResult(recommend(newAns));
          setPhase('result');
          setT(false);
        }, 1400);
      }
    }, 280);
  };

  const handleReset = () => {
    setPhase('intro');
    setStep(0);
    setAnswers({});
    setSelections([]);
    setResult(null);
    setTimeout(scrollHere, 100);
  };

  const mascotState =
    phase === 'intro'     ? 'wave'    :
    phase === 'question'  ? 'ask'     :
    phase === 'thinking'  ? 'think'   :
    phase === 'result' && result?.early ? 'guide' : 'celebrate';

  const mascotBubble =
    phase === 'thinking' ? 'Để Bé Mầm tìm gói phù hợp...' :
    phase === 'intro'    ? 'Mẹ ơi! Trả lời 4 câu hỏi, Bé Mầm sẽ gợi ý gói phù hợp nhất! 🌸' :
    phase === 'question' && q
      ? (q.subtitle || 'Mẹ hãy chọn một ý phù hợp nhất nhé!')
      : null;

  const canNext = selections.length > 0;

  return (
    <section id="quiz" className="section bg-white" aria-label="Quiz chọn gói iNIPT phù hợp">
      <div className="container-main">

        {/* Section header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="section-eyebrow justify-center">Cá nhân hóa lựa chọn</div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Gói iNIPT nào phù hợp với mẹ?
          </h2>
          <p className="text-slate-500 text-sm max-w-sm mx-auto leading-relaxed">
            4 câu hỏi · 1 phút · <strong className="text-brand-blue">Bé Mầm</strong> gợi ý riêng cho mẹ
          </p>
        </div>

        {/* Quiz wrapper */}
        <div
          ref={quizRef}
          className="max-w-xl mx-auto rounded-3xl border border-blue-100/80 overflow-hidden"
          style={{ background: 'linear-gradient(145deg, #f4f9ff 0%, #fdfcf8 100%)',
            boxShadow: '0 8px 40px -8px rgba(21,101,192,0.12)' }}
        >

          {/* Mascot bar */}
          <div className="px-5 sm:px-7 pt-6 pb-0 flex items-end gap-3">
            <BeMam
              size={56}
              state={mascotState}
              showBubble={!!mascotBubble}
              bubbleText={mascotBubble}
            />
            {phase === 'thinking' && (
              <div className="mb-1 text-brand-blue font-bold text-sm animate-pulse">
                Đang phân tích<span className="typing-dots"/>
              </div>
            )}
          </div>

          {/* Body */}
          <div className="px-5 sm:px-7 pb-7 pt-4">

            {/* INTRO */}
            {phase === 'intro' && (
              <div className="text-center py-4 animate-fade-up">
                <div className="text-[40px] mb-3">🌸</div>
                <h3 className="text-lg font-black text-slate-800 mb-2">
                  Để Bé Mầm gợi ý gói phù hợp nhé!
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-6 max-w-xs mx-auto">
                  Chỉ 4 câu hỏi · Không cần đăng nhập · Miễn phí hoàn toàn
                </p>
                <button onClick={handleStart} className="btn-primary px-8 py-3.5">
                  🌱 Bắt đầu ngay
                </button>
              </div>
            )}

            {/* QUESTION */}
            {phase === 'question' && q && (
              <div className={`transition-all duration-300 ${transitioning ? 'opacity-0 translate-y-2' : 'opacity-100'}`}>
                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1.5">
                    <span>Câu {step + 1}/{total}</span>
                    <span>{Math.round(((step + 1) / total) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-blue-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-blue to-blue-400 rounded-full transition-all duration-500"
                      style={{ width: `${((step + 1) / total) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Question */}
                <div className="mb-4">
                  <span className="text-2xl">{q.emoji}</span>
                  <h3 className="text-base sm:text-lg font-black text-slate-900 mt-1 mb-1 leading-snug">
                    {q.question}
                  </h3>
                  {q.multi && (
                    <p className="text-[11px] text-slate-400 font-semibold">Có thể chọn nhiều</p>
                  )}
                </div>

                {/* Options */}
                <div className="flex flex-col gap-2 mb-5">
                  {q.options.map(opt => (
                    <Option
                      key={opt.id}
                      opt={opt}
                      selected={selections.includes(opt.id)}
                      onClick={handleSelect}
                    />
                  ))}
                </div>

                {/* Next */}
                <button
                  onClick={handleNext}
                  disabled={!canNext}
                  className={`w-full py-3.5 rounded-full font-black text-sm transition-all duration-200
                    ${canNext
                      ? 'bg-brand-blue text-white hover:bg-brand-blueDark shadow-md hover:shadow-lg active:scale-95'
                      : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}
                >
                  {step < total - 1 ? 'Tiếp theo →' : 'Xem gợi ý của Bé Mầm ✨'}
                </button>
              </div>
            )}

            {/* THINKING */}
            {phase === 'thinking' && (
              <div className="text-center py-8 animate-fade-in">
                <div className="text-4xl mb-3 animate-bounce-gentle">🔍</div>
                <p className="text-sm font-semibold text-slate-500">
                  Bé Mầm đang phân tích câu trả lời của mẹ...
                </p>
                <div className="flex justify-center gap-1.5 mt-4">
                  {[0,1,2].map(i => (
                    <div key={i}
                      className="w-2 h-2 bg-brand-blue rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* RESULT */}
            {phase === 'result' && result && (
              <Result result={result} onReset={handleReset}/>
            )}

          </div>
        </div>
      </div>
    </section>
  );
}
