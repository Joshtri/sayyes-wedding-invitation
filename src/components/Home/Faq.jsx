import React, { useState } from 'react';

function Faq() {
  const faqData = [
    { question: 'Bagaimana cara order?', answer: 'Anda dapat memesan melalui website kami.' },
    { question: 'Berapa lama proses pengerjaan?', answer: 'Proses pengerjaan memakan waktu sekitar 3-5 hari kerja.' },
    { question: 'Apakah bisa revisi?', answer: 'Ya, kami menyediakan layanan revisi.' },
    { question: 'Apakah foto dan video bisa menyusul?', answer: 'Ya, Anda dapat mengirimkan foto dan video setelah pemesanan.' },
    { question: 'Apakah bisa custom warna background?', answer: 'Ya, Anda dapat memilih warna background sesuai keinginan.' },
    { question: 'Custom musik sendiri?', answer: 'Ya, Anda dapat mengunggah musik pilihan Anda.' },
    { question: 'Boleh mencantumkan lebih dari 1 rekening?', answer: 'Ya, Anda dapat mencantumkan lebih dari satu rekening.' },
    { question: 'Undangannya bisa pakai Bahasa Inggris?', answer: 'Ya, undangan dapat dibuat dalam Bahasa Inggris.' }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto mb-8 p-8">
      <h1 className="text-5xl font-bold mt-10 mb-5 text-center">FAQ</h1>
      <div className="border border-gray-300">
        {faqData.map((item, index) => (
          <div key={index} className="border-b border-gray-300 p-4">
            <div className="flex items-center cursor-pointer" onClick={() => toggleFaq(index)}>
              <span className="text-sm font-bold mr-4">{openIndex === index ? '-' : '+'}</span>
              <span className="text-sm">{item.question}</span>
            </div>
            {openIndex === index && (
              <div className="mt-2 text-gray-700 text-sm">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
