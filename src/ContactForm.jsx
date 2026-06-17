import { useState } from 'react';
import BeMam from './BeMam';

const NEEDS = [
  { id: 'inipt',    label: 'iNIPT cơ bản' },
  { id: 'iplus',    label: 'iNIPT+ gene lặn' },
  { id: 'twins',    label: 'Song thai' },
  { id: 'consult',  label: 'Cần tư vấn thêm' },
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', phone: '', week: '', city: '',
    const [form, setForm] = useState({
  name: '', phone: '', week: '', city: '',
  needs: [],
});
  const [errors, setErrors] = useState({});
  const [done, setDone]     = useState(false);

  const toggleNeed = id => setForm(f => ({
    ...f,
    needs: f.needs.includes(id)
      ? f.needs.filter(n => n !== id)
      : [...f.needs, id],
  }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Vui lòng nhập họ tên';
    if (!/^[0-9]{9,11}$/.test(form.phone.replace(/\s/g, '')))
      e.phone = 'Số điện thoại không hợp lệ';
    return e;
  };

  const submit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setDone(true);
  };

  if (done) return (
    <section id="form" className="section bg-white">
      <div className="container-main max-w-lg mx-auto text-center">
        <BeMam size={80} state="celebrate" />
        <h2 className="text-2xl font-black text-slate-900 mt-5 mb-3">Cảm ơn mẹ! 🌸</h2>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">
          Invivo Lab đã nhận thông tin và sẽ liên hệ với{' '}
          <strong>{form.name}</strong> sớm nhất.
          Mẹ cũng có thể gọi ngay hotline để được tư vấn nhanh hơn.
        </p>
        <a href="tel:19008668" className="btn-primary px-8 py-3.5">
          📞 Gọi hotline 1900 8668 96
        </a>
      </div>
    </section>
  );

  const inputCls = (field) =>
    `w-full border rounded-xl px-4 py-3 text-sm font-medium outline-none transition-all duration-200
    bg-white focus:ring-2 focus:ring-brand-blue/20
    ${errors[field]
      ? 'border-red-300 focus:border-red-400'
      : 'border-slate-200 focus:border-brand-blue hover:border-blue-200'}`;

  return (
    <section id="form" className="section bg-white" aria-labelledby="form-h2">
      <div className="container-main max-w-xl mx-auto">
        <div className="text-center mb-8">
          <BeMam size={56} state="guide" showBubble={false} />
          <h2 id="form-h2" className="text-2xl sm:text-3xl font-black text-slate-900 mt-4 mb-2">
            Mẹ muốn biết gói iNIPT nào phù hợp?
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Để lại thông tin — Invivo Lab sẽ tư vấn theo tuần thai và nhu cầu của mẹ.
          </p>
        </div>

        <div
          className="rounded-3xl p-6 sm:p-8 border border-blue-100"
          style={{
            background: 'linear-gradient(145deg,#f4f9ff 0%,#fdfcf8 100%)',
            boxShadow: '0 8px 40px -8px rgba(21,101,192,0.12)',
          }}
        >
          <form onSubmit={submit} noValidate>
            {/* Name + Phone */}
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="f-name"
                  className="block text-[11px] font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                  Họ và tên *
                </label>
                <input
                  id="f-name" type="text"
                  placeholder="Nguyễn Thị A"   /* ← đã đổi theo yêu cầu */
                  value={form.name}
                  onChange={e => {
                    setForm(f => ({ ...f, name: e.target.value }));
                    setErrors(er => ({ ...er, name: '' }));
                  }}
                  className={inputCls('name')}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="f-phone"
                  className="block text-[11px] font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                  Số điện thoại *
                </label>
                <input
                  id="f-phone" type="tel"
                  placeholder="0912 345 678"
                  value={form.phone}
                  onChange={e => {
                    setForm(f => ({ ...f, phone: e.target.value }));
                    setErrors(er => ({ ...er, phone: '' }));
                  }}
                  className={inputCls('phone')}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>
            </div>

            {/* Week + City */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="f-week"
                  className="block text-[11px] font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                  Tuần thai
                </label>
                <select id="f-week" value={form.week}
                  onChange={e => setForm(f => ({ ...f, week: e.target.value }))}
                  className={inputCls('week')}>
                  <option value="">-- Chọn --</option>
                  <option value="under9">Dưới 9 tuần</option>
                  <option value="9-12">Tuần 9–12</option>
                  <option value="13-16">Tuần 13–16</option>
                  <option value="17-20">Tuần 17–20</option>
                  <option value="21+">Trên 20 tuần</option>
                </select>
              </div>
              <div>
                <label htmlFor="f-city"
                  className="block text-[11px] font-bold text-slate-600 uppercase tracking-wide mb-1.5">
                  Tỉnh/Thành phố
                </label>
                <select id="f-city" value={form.city}
                  onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                  className={inputCls('city')}>
                  <option value="">-- Chọn --</option>
                  <option>TP. Hồ Chí Minh</option>
                  <option>Hà Nội</option>
                  <option>Đà Nẵng</option>
                  <option>Cần Thơ</option>
                  <option>Khác</option>
                </select>
              </div>
            </div>

            {/* Needs */}
            <div className="mb-5">
              <div className="text-[11px] font-bold text-slate-600 uppercase tracking-wide mb-2">
                Nhu cầu quan tâm
              </div>
              <div className="grid grid-cols-2 gap-2">
                {NEEDS.map(n => (
                  <label
                    key={n.id}
                    className={`flex items-center gap-2.5 border rounded-xl px-3 py-2.5
                      cursor-pointer transition-all text-sm font-medium select-none
                      ${form.needs.includes(n.id)
                        ? 'border-brand-blue bg-brand-blueLight text-brand-blue'
                        : 'border-slate-200 text-slate-600 hover:border-blue-200 bg-white'}`}
                  >
                    <input
                      type="checkbox"
                      checked={form.needs.includes(n.id)}
                      onChange={() => toggleNeed(n.id)}
                      className="accent-brand-blue w-4 h-4"
                    />
                    {n.label}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-primary w-full justify-center text-base py-4">
              Gửi thông tin tư vấn ✨
            </button>

            <p className="text-[11px] text-slate-400 text-center mt-3 leading-relaxed">
              🔒 Thông tin của mẹ được bảo mật hoàn toàn. Invivo Lab không chia sẻ cho bên thứ ba.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
