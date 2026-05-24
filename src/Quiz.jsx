import { useState } from 'react';
import BeMam from './BeMam';
import { QUIZ_QUESTIONS, getRecommendation } from './quizData';

const BeMamMessages = [
  'Mẹ ơi, Bé Mầm sẽ giúp mẹ chọn gói phù hợp nhé! 🌱',
  'Tuần thai của mẹ là điều quan trọng đầu tiên nè!',
  'Mẹ mang thai đơn hay song thai vậy ạ?',
  'Mẹ muốn kiểm tra ở mức độ nào nhỉ?',
  'Cho Bé Mầm biết thêm một chút để gợi ý chính xác hơn nhé!',
  'Bé Mầm đang tìm gói phù hợp cho mẹ... ✨',
];

function QuizOption({ option, selected, onClick, multi }) {
  return (
    <button
      onClick={() => onClick(option.id)}
      className={`quiz-option ${selected ? 'selected' : ''} text-left`}
      aria-pressed={selected}
    >
      <div className="flex items-start gap-3">
        <span className="text-xl flex-shrink-0 mt-0.5">{option.icon}</span>
        <div>
          <span className="text-sm font-semibold text-slate-700">{option.label}</span>
        </div>
        {selected && (
          <span className="ml-auto flex-shrink-0 w-5 h-5 bg-brand-blue rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        )}
      </div>
    </button>
  );
}

function ResultCard({ result, onReset, onCTA }) {
  return (
    <div className={`rounded-3xl bg-gradient-to-br ${result.color} border border-blue-100 p-7 animate-fade-up`}>
      <div className="flex items-start gap-4 mb-5">
        <BeMam size={60} animate />
        <div>
          <div className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${result.badgeColor}`}>
            {result.badge}
          </div>
          <h3 className="text-2xl font-black text-slate-900">{result.pkg}</h3>
          <p className="text-sm font-semibold text-slate-500">{result.subtitle}</p>
        </div>
      </div>

      <div className="bg-white/70 rounded-2xl p-4 mb-5 border border-white">
        <p className="text-sm text-slate-700 leading-relaxed">
          <span className="font-bold text-brand-blue">Bé Mầm gợi ý: </span>
          {result.reason}
        </p>
      </div>

      {result.early ? (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-5 text-sm text-amber-700 leading-relaxed">
          💛 <strong>Mẹ có thể để lại thông tin ngay bây giờ</strong> — Invivo Lab sẽ chủ động liên hệ nhắc nhở mẹ khi đến tuần thai thứ 10.
        </div>
      ) : (
        <div className="text-xs text-slate-400 bg-white/50 rounded-xl px-4 py-3 mb-5 leading-relaxed border border-slate-100">
          💡 Invivo Lab sẽ tư vấn bảng giá và chính sách hỗ trợ phù hợp theo từng trường hợp cụ thể của mẹ.
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={onCTA} className="btn-primary flex-1 justify-center py-3.5">
          Nhận tư vấn chi tiết
        </button>
        <button
          onClick={onReset}
          className="flex-1 text-sm font-semibold text-slate-500 border border-slate-200 rounded-full py-3 hover:bg-white transition-all"
        >
          ↩ Làm lại
        </button>
      </div>
    </div>
  );
}

export default function Quiz() {
  const [step, setStep] = useState(0); // 0 = not started
  const [answers, setAnswers] = useState({});
  const [currentSelections, setCurrentSelections] = useState([]);
  const [result, setResult] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  const currentQ = QUIZ_QUESTIONS[step - 1];
  const totalSteps = QUIZ_QUESTIONS.length;

  const handleStart = () => {
    setStep(1);
    setAnswers({});
    setCurrentSelections([]);
    setResult(null);
  };

  const handleSelect = (optionId) => {
    if (!currentQ) return;
    if (currentQ.multi) {
      if (optionId === 'none') {
        setCurrentSelections(['none']);
      } else {
        setCurrentSelections(prev => {
          const without = prev.filter(id => id !== 'none');
          return without.includes(optionId)
            ? without.filter(id => id !== optionId)
            : [...without, optionId];
        });
      }
    } else {
      setCurrentSelections([optionId]);
    }
  };

  const handleNext = () => {
    if (currentSelections.length === 0) return;
    const key = `q${step}`;
    const value = currentQ.multi ? currentSelections : currentSelections[0];
    const newAnswers = { ...answers, [key]: value };
    setAnswers(newAnswers);

    setTransitioning(true);
    setTimeout(() => {
      if (step < totalSteps) {
        setStep(step + 1);
        setCurrentSelections([]);
      } else {
        setResult(getRecommendation(newAnswers));
        setStep(totalSteps + 1);
      }
      setTransitioning(false);
    }, 300);
  };

  const handleReset = () => {
    setStep(0);
    setAnswers({});
    setCurrentSelections([]);
    setResult(null);
  };

  const scrollToForm = () => {
    document.querySelector('#form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const canNext = currentSelections.length > 0;
  const bemamMsg = step === 0
    ? BeMamMessages[0]
    : step <= totalSteps
    ? BeMamMessages[step]
    : BeMamMessages[5];

  return (
    <section id="quiz" className="py-16 bg-white" aria-label="Quiz chọn gói iNIPT phù hợp">
      <div className="max-w-2xl mx-auto px-5">
        {/* Section header */}
        <div className="text-center mb-8">
          <div className="section-label justify-center">Cá nhân hóa lựa chọn</div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mb-3">
            Mẹ phù hợp với gói iNIPT nào?
          </h2>
          <p className="text-slate-500 text-sm max-w-md mx-auto">
            Trả lời 4 câu hỏi ngắn — <strong className="text-brand-blue">Bé Mầm</strong> sẽ gợi ý gói phù hợp nhất cho mẹ.
          </p>
        </div>

        {/* Quiz card */}
        <div className="bg-gradient-to-br from-blue-50/60 to-emerald-50/40 rounded-3xl border border-blue-100 p-6 sm:p-8 shadow-lg">

          {/* Bé Mầm + message */}
          <div className="flex items-end gap-3 mb-6">
            <BeMam size={52} animate />
            <div className="bg-white rounded-2xl rounded-bl-none border border-blue-100 px-4 py-2.5 shadow-sm max-w-xs text-sm font-semibold text-brand-blue leading-relaxed">
              {bemamMsg}
            </div>
          </div>

          {/* Progress bar */}
          {step >= 1 && step <= totalSteps && (
            <div className="mb-5">
              <div className="flex justify-between text-xs font-bold text-slate-400 mb-1.5">
                <span>Bước {step}/{totalSteps}</span>
                <span>{Math.round((step / totalSteps) * 100)}%</span>
              </div>
              <div className="h-2 bg-blue-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-brand-blue to-blue-400 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* STEP 0 — Start */}
          {step === 0 && (
            <div className="text-center py-4 animate-fade-up">
              <div className="text-4xl mb-4">🌸</div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">
                Để Bé Mầm gợi ý gói phù hợp nhé!
              </h3>
              <p className="text-sm text-slate-500 mb-6 leading-relaxed">
                Chỉ 4 câu hỏi · Mất khoảng 1 phút · Không cần đăng nhập
              </p>
              <button onClick={handleStart} className="btn-primary text-base px-8 py-3.5">
                <span>🌱</span> Bắt đầu ngay
              </button>
            </div>
          )}

          {/* STEP 1–4 — Questions */}
          {step >= 1 && step <= totalSteps && currentQ && (
            <div className={`transition-all duration-300 ${transitioning ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}>
              <div className="mb-5">
                <div className="text-2xl mb-2">{currentQ.emoji}</div>
                <h3 className="text-lg font-bold text-slate-800">{currentQ.question}</h3>
                {currentQ.multi && (
                  <p className="text-xs text-slate-400 mt-1">Có thể chọn nhiều</p>
                )}
              </div>

              <div className="flex flex-col gap-2.5 mb-6">
                {currentQ.options.map(opt => (
                  <QuizOption
                    key={opt.id}
                    option={opt}
                    selected={currentSelections.includes(opt.id)}
                    onClick={handleSelect}
                    multi={currentQ.multi}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={!canNext}
                className={`w-full py-3.5 rounded-full font-bold text-base transition-all duration-200 ${
                  canNext
                    ? 'bg-brand-blue text-white hover:bg-brand-blueDark shadow-md hover:shadow-lg'
                    : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                }`}
              >
                {step < totalSteps ? 'Tiếp theo →' : 'Xem gợi ý của Bé Mầm ✨'}
              </button>
            </div>
          )}

          {/* RESULT */}
          {step > totalSteps && result && (
            <ResultCard result={result} onReset={handleReset} onCTA={scrollToForm} />
          )}
        </div>
      </div>
    </section>
  );
}
