import React from 'react';
import { TECarousel, TECarouselItem } from 'tw-elements-react';
import { Truck, Music } from 'lucide-react'; // Đổi Shirt thành Music (biểu tượng nốt nhạc)

export default function Carousel() {
    return (
        <div className="w-full px-10 py-6">
            <div className="flex items-start justify-between gap-4">
                {/* Thông tin bên trái */}
                <div className="w-1/4">
                    <div className="flex items-start gap-3 mb-2">
                        <Truck className="text-blue-600" />
                        <div>
                            <h2 className="text-lg font-semibold">Ưu đãi hôm nay</h2>
                            <p className="text-sm text-gray-600">Miễn phí ship đàn guitar toàn quốc</p>
                        </div>
                    </div>

                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Flash Sale</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Freeship</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Bảo hành 12 tháng</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Tặng phụ kiện</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Giao hàng nhanh</li>
                    </ul>
                </div>

                {/* Carousel hình ảnh guitar */}
                <div className="w-1/2">
                    <TECarousel ride="carousel" showIndicators showControls>
                        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                            <TECarouselItem itemID={1} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlpd0HGvICEP12PVsptRbrPlEgn4jhFq0V-Sl-ebQauBSazJvaUdEW89jRKEpQ0rESuho&usqp=CAU" className="w-full max-h-64 object-contain" alt="Guitar Slide 1" />
                            </TECarouselItem>
                            <TECarouselItem itemID={2} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="https://hocdan.edu.vn/wp-content/uploads/2016/08/nhung-luu-y-khi-hoc-guitar-dem-hat-1.jpg" className="w-full max-h-64 object-contain" alt="Guitar Slide 2" />
                            </TECarouselItem>
                            <TECarouselItem itemID={3} className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                                <img src="https://hocguitarcoban.com/wp-content/uploads/2018/11/Nh%E1%BB%AFng-kh%C3%B3-kh%C4%83n-khi-h%E1%BB%8Dc-%C4%91%C3%A0n-guitar-c%E1%BA%A7n-ph%E1%BA%A3i-v%C6%B0%E1%BB%A3t-qua-1.jpg" className="w-full max-h-64 object-contain" alt="Guitar Slide 3" />
                            </TECarouselItem>
                        </div>
                    </TECarousel>
                </div>

                {/* Thông tin bên phải */}
                <div className="w-1/4 text-right">
                    <div className="flex justify-end items-start gap-3 mb-2">
                        <div>
                            <h2 className="text-lg font-semibold">Âm thanh tuyệt hảo</h2>
                            <p className="text-sm text-gray-600">Phù hợp cho mọi người chơi</p>
                        </div>
                        <Music className="text-green-600" />
                    </div>

                    <ul className="flex flex-col gap-2 mt-2">
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Đàn Guitar Acoustic</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Đàn Guitar Classic</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Đàn Guitar Điện</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Phụ kiện tặng kèm</li>
                        <li className="px-3 py-1 bg-gray-100 rounded-full text-sm">Bảo hành 12 tháng</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
