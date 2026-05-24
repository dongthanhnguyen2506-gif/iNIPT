import { useState } from 'react';
import BeMam from './BeMam';

const needs = [
  { id: 'inipt', label: 'iNIPT cơ bản' },
  { id: 'inipt-plus', label: 'iNIPT+ gene lặn' },
  { id: 'twins', label: 'Song thai' },
  { id: 'ivf', label: 'IVF / Thai quý' },
  { id: 'consult', label: 'Cần tư vấn thêm' },
];

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', phone: '', week: '', city: '', needs: [] });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const toggleNeed = (id) => {
    setForm(f => ({
      ...f,
      needs: f.needs.includes(id) ? f.needs.filter(n => n !== id) : [...f.needs, id],
    }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Vui lòng nhập họ tên';
    if (!form.phone.trim() || !/^[0-9]{9,11}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Số điện thoại không hợp lệ';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    // TODO: connect to Google Sheet / CRM webhook
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="form" className="py-16 bg-white">
        <div className="max-w-lg mx-auto px-5 text-center">
          <BeMam size={80} animate />
          <h2 className="text-2xl font-black text-slate-900 mt-4 mb-3">Cảm ơn mẹ! 🌸</h2>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Invivo Lab đã nhận thông tin và sẽ liên hệ với <strong>{form.name}</strong> sớm nhất có thể.<br />
            Trong khi đó, mẹ có thể gọi ngay hotline <a href="tel:19008668" className="text-brand-blue font-bold">1900 8668 96</a> để được tư vấn nhanh hơn.
          </p>
          <a href="tel:19008668" className="btn-primary text-base px-8 py-3.5">
            📞 Gọi hotline ngay
          </a>
        </div>
      </section>
    );
  }

  return (
    <section id="form" className="py-16 bg-white" aria-labelledby="form-title">
      <div className="max-w-xl mx-auto px-5">
        <div className="text-center mb-8">
          <BeMam size={60} animate />
          <h2 id="form-title" className="text-2xl sm:text-3xl font-black text-slate-900 mt-3 mb-2">
            Mẹ muốn biết gói iNIPT nào phù hợp nhất?
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            Để lại thông tin, Invivo Lab sẽ tư vấn theo tuần thai, nhu cầu và tiền sử của mẹ.
          </p>
        </div>

        <div className="bg-gradient-to-br from-blue-50/60 to-emerald-50/40 rounded-3xl border border-blue-100 p-6 sm:p-8 shadow-lg">
          <form onSubmit={handleSubmit} noValidate>
            {/* Name */}
            <div className="mb-4">
              <label htmlFor="f-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Họ và tên *
              </label>
              <input
                id="f-name"
                type="text"
                placeholder="Nguyễn Thị Lan"
                value={form.name}
                onChange={e => { setForm(f => ({ ...f, name: e.target.value })); setErrors(er => ({ ...er, name: '' })); }}
                className={`w-full border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-300 focus:ring-red-200' : 'border-blue-200 focus:ring-blue-200 focus:border-brand-blue'} bg-white`}
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>

            {/* Phone */}
            <div className="mb-4">
              <label htmlFor="f-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                Số điện thoại *
              </label>
              <input
                id="f-phone"
                type="tel"
                placeholder="0912 345 678"
                value={form.phone}
                onChange={e => { setForm(f => ({ ...f, phone: e.target.value })); setErrors(er => ({ ...er, phone: '' })); }}
                className={`w-full border rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 transition-all ${errors.phone ? 'border-red-300 focus:ring-red-200' : 'border-blue-200 focus:ring-blue-200 focus:border-brand-blue'} bg-white`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
            </div>

            {/* Row: week + city */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="f-week" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Tuần thai
                </label>
                <select
                  id="f-week"
                  value={form.week}
                  onChange={e => setForm(f => ({ ...f, week: e.target.value }))}
                  className="w-full border border-blue-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-brand-blue bg-white"
                >
                  <option value="">-- Chọn --</option>
                  <option value="<10">Dưới 10 tuần</option>
                  <option value="10-12">Tuần 10–12</option>
                  <option value="13-16">Tuần 13–16</option>
                  <option value="17-20">Tuần 17–20</option>
                  <option value="21+">Trên 20 tuần</option>
                </select>
              </div>
              <div>
                <label htmlFor="f-city" className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-1.5">
                  Tỉnh/Thành phố
                </label>
                <select
                  id="f-city"
                  value={form.city}
                  onChange={e => setForm(f => ({ ...f, city: e.target.value }))}
                  className="w-full border border-blue-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-brand-blue bg-white"
                >
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
            <div className="mb-6">
              <div className="text-xs font-bold text-slate-700 uppercase tracking-wide mb-2">
                Nhu cầu quan tâm
              </div>
              <div className="grid grid-cols-2 gap-2">
                {needs.map(n => (
                  <label
                    key={n.id}
                    className={`flex items-center gap-2.5 border rounded-xl px-3 py-2.5 cursor-pointer transition-all text-sm font-medium ${
                      form.needs.includes(n.id)
                        ? 'border-brand-blue bg-brand-blueLight text-brand-blue'
                        : 'border-slate-200 text-slate-600 hover:border-blue-200 bg-white'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={form.needs.includes(n.id)}
                      onChange={() => toggleNeed(n.id)}
                      className="accent-brand-blue"
                    />
                    {n.label}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-primary w-full justify-center text-base py-4">
              Gửi thông tin tư vấn ✨
            </button>

            <p className="text-xs text-slate-400 text-center mt-3 leading-relaxed">
              🔒 Thông tin của mẹ được bảo mật hoàn toàn. Invivo Lab không chia sẻ cho bên thứ ba.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
