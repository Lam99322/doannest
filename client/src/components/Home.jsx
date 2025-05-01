import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';
import Notifications from './Notifications';

const products = [
    { name: 'Analytics', description: 'Hiểu rõ hơn về lưu lượng truy cập của bạn', href: '#', icon: ChartPieIcon },
    { name: 'Engagement', description: 'Giao tiếp trực tiếp với khách hàng', href: '#', icon: CursorArrowRaysIcon },
    { name: 'Security', description: 'Dữ liệu của khách hàng sẽ được bảo mật', href: '#', icon: FingerPrintIcon },
    { name: 'Integrations', description: 'Kết nối với các công cụ bên thứ ba', href: '#', icon: SquaresPlusIcon },
    { name: 'Automations', description: 'Xây dựng các chiến lược tự động hóa hiệu quả', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
    { name: 'Xem demo', href: '#', icon: PlayCircleIcon },
    { name: 'Liên hệ với đội ngũ bán hàng', href: '#', icon: PhoneIcon },
];

export default function Home() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogout = () => {
        const confirmLogout = window.confirm('Bạn có chắc chắn muốn đăng xuất không?');
        if (confirmLogout) {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            navigate('/');
        }
    };

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img
                            alt="Logo"
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUQExIVERIXFRoaGBUXFRoYGRkaGB8XGBgXGBcYHiggHRomGxYVITMhJSktLi4vGh8zODMsNygtLisBCgoKDg0OGxAQGysiICUtLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQ8AugMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAE8QAAIBAwMBBAUIAwoLCQAAAAECAwAEEQUSITEGE0FRIjJhcYEHFCNCUpGhsYLB0RUzNDVDYnKSouEkJVNjc3WTo7LS8BcmRVVllLPCw//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACkRAAICAQMDBAAHAAAAAAAAAAABAhEDEiFRBBMxIjJBYQUUI1KBkaH/2gAMAwEAAhEDEQA/AOlmlDSvQPKFKUoQKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQA0oaUJFKUoQKUpQCtTVrhooJZVxuSN2GemVBIz7OK26+MoIIIyDwQeQfZQkq47RymR49giOUVFkHpZY24OQrkH9+J4PTFa0XaO4hUPIqmIQ7mPLMjFpEjZj9ZC0eCcZG4eRNW02qE7iilgcg7RkHG3IPngAZ8q+G1jwRsXBG0jaMFeTtI8uTx7TVKfJbUuCG0fWJp27sp3ZKSkOV9FismxSoDZKgHkHBzUeO0dyibmRZCY4X3qm1F7x3UhgZC3RRgjxq2JCowQoBAIGABgE5IHsJGa8m1QjaUUjjjaMccjj2Gpp8jUuCraXrs5inMmO8jhaQZTbztVxldx49MDGegFfT2kmZhAQsMqgCX0C+GAkb0FyNwcKrL7C3iKtHzVOfQXldp9EcrwNp9nA49leLmwhlBEkSSBsZ3IDnbnbnI5xk499KfI1Lgrcvawk7F7pNxAWRicR5ZV3zJxtDbgVG7nPWrTC2VByGyB6Q6H2jk8fGvItUwRsXBABGOMLwBjpgVkRAoCgAADAAGAB5AVKv5IbXwfaUpUlRSlKAUpSgFKUoAaUNKEilKUIFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoAaUNKEilR+u6n81i73YZGLoioCBueRgijJ4Ayw5rAZtTH/hn3XUVVlOMfJeOOUlaRL0qst2juleWJtOk3wIskoWaJtqNu2kZIz6jcDyrYftIXMK21tJdNLB34VSibY+BklyOctjFR3I8jtT8UTrEAZPA868xyBhlSGHmDkfeKpfabVo57e0umTfaNL9Lbs6oXJyiK3OGVZOWGcYGelbmgJCt/OloEWBYI++SI/Qi4zn6IeW3OSB5VHc9VFu16NRa6VG9odTNrD3ioJHLoiKTtBeRlRcnBwMt5VhMmqx8vp8cgH+RugW+CyKv51aU4xdMrHHKStExULb9qrOSQQrMCxJVTtYIzDqqSEbWPsBqOvu0wuAbKO3uDdSK6NAdsckY25LEuQuMHggnNR19HfLp0VrNaS7xLGMRQ5WCOFgRIvd7t0jAc4Pj4c5znlpqjSGC09RfKVVZu1sjRyXMNo72sLYmlkbu2HTcFiILEqGycgVlue1u0SzLbSS2kThHuEZMbsKThCQWUbgMjxq/cjyZ9qfBZaVB67f3Ilgt7VY2llWV/pM4IiCtsGOjNuxk9K29D1hLqPeoKOp2yRtw8bj1kYfr8RU6ldEODSskagO0886tbpFOlqsjsrSum5Q+PokbPAV2yufPA8a8Ta9NN3nzGFZ0hDGSeRisWVGSkZAJd+PDgedaupa2LqCCGOBJpLuESGOQnu44yBuZyOTycADknyrPJkiot3VGmPFLUtvJL6BqrTB4pk7m6hbbNH1GTyrofFGHINStc90zUBpjypPG0lwyR926yu/erv7tYwZTlNrP0JPBzVgl7U90LgXFtLbyQQ980ZZH3IcgFWQkdVI5pizRnFNOxlwyjJ7FipUPpWuGWU28tvLbTCPvArlWDJkDcrISDyR1wamK1TTVoylFxdMUpTFSVBpQ0oSaGt6Wt1EYmZozuV1dcbleNg6MMgjggcGoJtbvI9M1J2unkmt7nu45iqKwUCDwVdvV28PGrZVHvx/izWfZfE/cLc1hmSpM6embtokezWnTNdapA07XEr2cAEku0HLi4wDsUDAz5VudjezN7bXCvcLCI4rH5upikZi2GVgSGUY4BrQmLJLrLcqRYQY8D6k5yK89ibAW19ahd4E+mu77pHYM4aA7vSJ+0elYteaOiL2V+SJ7HolrZfulNF87lM5t7WJiAqZkKcZBCkyF8tjOAKm9QC3kMt9BB8z1OzJEkYIw4ADmNmUYkjdOQ2Mg+6ovsk0d5aT6Q8ncTrcySWrt9YrKzgrn1isgYFR4EVN3KSaZbXU1y8ct9eEIkcWdpIXu40QNyepYn2+yoX+ktf0YdduluIbGRfVlvLRh7iwf9VYtWstQk1WQwC6Qd7Dtk3lbYRqAZtysdrkjgADOaXGn/N4dMtzyY7q1U+9Qc/jWe4v9Z/dGRIVlaAToFWSFBB3OE3t3xw+7O7AG6r5fcZ4F6f5PJ1GK47SRCIhu6t5Edh9oAkrnzG4ffW5o1/rB1Du5o3Fn3soJMUYXYA3dEODuJJC+FbOoxwLrdoUCidoJu8x1K4XYW9vrYNQel9oL83UTPdFoJNRltzCYowAqiQrhwN31RWdGzZi7N3ezU761l5trueSMZ6CVUVsfpRsf6orLPpCRtaaLGd8VuPnFy32juJjU/0nyfclaTjGouv/AK1CfvhH7Kn9O/jHUj/PhHw7urwinJGWSTUGzI/8bWP+iuvyjrzd6Xp+qSyTJO8EkRaO7RG7syIhI2y/zcjhx4ZHu9P/ABrYf6O6/wCGOoDR+zltd/OXmjJYXtwMqxUsu4Eo+0jcn801ecXKbSKQmo402WfQ+0Ntdw3dtaRhLe3iCoyjCtuD8ov2fR6+OfiaP8nB72N5PFYYIFPsjTc3P9JzVr0GMLcaoqgKoggAAGAAI5OAPKq98liAWAI6tIxP4AZ+ArzfxGWnC19nd0vqmpGPt3Z5NjIeWS6jQ/0XYH80FbPylfwnUv8AVceP9pJWT5QpNlkZPGOaFx7SrqePhmtz5QNInu5EmtYjPFd2ogZ1IwgZ0kWRsn1Nhfn3edV/DZ/pb/Y6uPqN29H+Nov9Xf8A6JVgtYN7bfDx91RUEKzazLjlYLGNGOfrSOWA9+1M/EVboLZU9UYzXpxyVGjinicp38HqKFVGAAK90pWRtVFcNKGld55gqu6l2VidJy2pPDaTuXngCRHc4A3hXIL5xH6o54NWKq3qHZxpHlYONj4KJ9h3ZDO3QjkRrjjqz+dZ5I6kaYpqL3N/Xuzr3EskttewwreW6xOrx94XWMPhosOvO2Q561n1bQ49tvLDftbS20JhWRFjlLqRGSndsDlzsQgDnn21FSdnXKQp3mGhMzJJ9ZXdw0TgAAdAQw4BBI6GtKHszcCNCZFModXKbz3W5UQDHoZGXTGfI568Vj2WdK6iJM2nZvT2tPm7yLdlXaVmfCyB5GLMxVcGI5yPAjGK1tK0ewgkeWNleWLIeSScytEPEEux7vj3Vpz9mZjmRWjSYoBwSVIdpWmjbgZU94pDYzuQHFZrbR7kRT27FNhh7uPkEMfSy7YjDDIIJBLck4rSEa8mOSal4ZvdpIY5I03XK2rJKjxykpgOM7OH4bPPHjWtM2oYIfWEVcEkx2sQfAO0nJYgYJwTjitGbs9cxszQsjKoKwqSAyIwPGXR1O0kqMjlCRweuZezkrBxIYTyNoILK43yyMJFwMcyjgE8oD7BLjqdtFYycVSZjHZ0QSR3VrdKLsO6tNcfTGVmGChwy4YYOFHTniiaPGkSwy3qR3XfvcrJGUQh8tuKRyFsqAWBznxrYXs0TDFbu+VjlLb84YAIyoyccMHIYDwxWiez95tZC0TGUN3rggDnvBja0bHb6e4bWBBZutNK4J1t7WZ5Oz4UMVvc3azrctNKEb0kXaN6LtAUL7vA1I6NZtC8089wk0tw0ZLImxeBsQKu45z51rDQJF+dAPvEsTKrO2TllRRvwvT0SPditWbspISyLIgiAAhDBmMY9PpgjDRs2UPgOOOtTpp3RDk2qbJbX9PhlAmklkgaAMRJDIUdQw9Iejk4IA4xzXvSba3s41jWXIkcsGkkDPKzYJOT6x6dK1tV0yaVpEXZ3UndEuXIcGMgnCFCpyB4n4VqXvZ6ZooIo2T6MOrFmwMM6OuV7s7uFwVGz3gVPzdFfirM11pztNJJbagsBnUJImyOXf3YI4ycjCk5AqK1vsw2lWiXFlcuuTEjRsqujs5CCQeKk5GcEg1ltuyT7g+8IyrlW4ykw5V1CqMp4cnJBYHrVkSw72wFjcc5iVWKH1XGCGjJH1WAIyPCscuFZFTRvjzaH5OdaNqDXGLi9jub0I2UhiWJbfcvXv2ZgQVOeGGOh5zirJ2JllukeLT9R+aIjNutJY47loRnrDKGGYj4ZyB0qJu+x1yZNz21pdtx9L30sG/HRpYlBUt59auPYvQTayNdXDxmdoxEscK7Yoowd21c8sSQOSB0rnjicdkqN1lcnuyw9mtAjsY2VWeWSRy8s0hy8jnjc2OAAMAAcAVL1ri8Tzr788Tzq+lltSM9K1zeLXz56vl+IppYtEKaUNK7jzBSlKEClKUApSlAKUpQClKUApSlAKUpQClKUApSlAK+V9pQClKUBlmtmXqOPOsVWOo2+sfrIPeB+YrCGW9mdOTBW6I6lfWQjqCPeK+Vuc4pSlCBSvhNVhb+51ORoLAiK3Q7Zb0jIz4pAPrN7fy4zWUlFbl4Qc3SJXV9ftrT9/mVCei9XPuQcn7q0YNavLn+CadMynpJcMLdPfhsuR8KsfZ3sZaWXppH3sx9aeU75WPnuPT3DFWGud5m/B1R6eK87lP0/SdTZ1aaW0ijz6UcaSSMR5B2ZQD7cV71rs/qDyZtr2GGLA9F7fe2fE7t36qttKprlyadqHBSItE1dDzcWdwPEGOSI/epYfhWbWZrq3fC2MtzHgZkiePOfEd2xDHFXGlSskl8h4YP4KBYdq7WV+5LNBN/kp0MT/APwfganKlNZ0W3vE7u4hSZf5w5HtU9QfaKo+oaPd6T9JAz3tiPWgY7poV842+uoH1Tz+daxzcmE+n/AGlkpWppWpRXUSzQuHjboR4eYI8CPKtutzmFKUoQKUpQClKUBY6VFfui1fDqDe2uTtSPQ70OSVZQRz0qDu0AYgdK9tdk/wB5rXY5Na44OL3MM2SMlsfKUrXv7tYYnmf1UQsfcozWxzld7QySX1wukwMUDDfdSjrHF9gH7TfrHtroemafFbRJBEgSNBhVH/XJ8c1U/kq09hbNeyD6e8cysfJOe7UezHP6VXauKctTs9GENKoUpSqlxSlKAUpSgFKUoDnHarSm0qU6lbKfmrt/hcC9Bn+XQeBHiP76sNvMsirIhDIwBUjoQeQasc0SupRgGVgQQeQQeCD7K5t2YQ2VzcaS5JWP6W3J8YXPq/oscffW2KdOjmz47WpFppSldJxilKUApSlADShpQClKUAqq/KXKRYtEpw00kcQ/Sb+6rVVS7druk05PBr+LPwI/bVMj9LNMSuaOlWdsIo0iXhUVVHuUAD8qzUpXGeiKqvaLt3b2V3DZSK7NJty4xtjDnapbJyckHp0FWquMfKb2aurjVomihd0kWIB1UlV2khtzdFwOeaA7PSlKAVqatqCWsMlxJnZGhZscnA5wB51t1A9vLGS40+5hjXfI0R2qOpIwcD2nFAeexfauLVIWmjRoyr7WRsEg4BByOCCD+dWCub/Ijo89vbzvNG8XeSLtV1KsQgILbTyBk4+FdIoBVB+UmLuLiw1AcbJu4kP+bmHGfYCD99X6qh8rVvv0q4PimyQHyKOp/LNE6IatUblKw2cu+NH+0it94B/XWau88wUpShApSlADShpQClKUAqofKC2xrCbwS/iz7if7qt9UH5UDJOq2kPrJG91JjwSL0V+OWY/Cs8vtZrh96OwmtbUXkVCYxlvv49g8TWt2b1Rbu1huV/lI1J9jYww+DAj4VJVyHpRdOyL0eadi3eA48CRg58qlKUqEqJnLU7SoUpSpKClKUAqF1ae4V8ICE8Cozn31NUqGrNMc1B21ZgsGcxqXGG8f1VAfKacaVee2Ij4kgD86s1Ur5WpibNLVfXubmKID2bg7H3YX8ako3bs96BIGtYGU5Bhjwf0RW/Vc7IDuDcaec/4NMdmephl+kj+7LD4VY67Yu0meZNVJoUpSrFBSlKAGlDSgFKUoBUD2Lh+cy3t+w3JJL83j8u6gG0/BnL/dW32m1H5taTz+KRsR/SPC/wBoipzsbpPzSxt7Y9ViXf7Xb0nP9ZjWGZ+EdXTR8sp/Ym7Ol3kmkTHEMrGS0c9Du9aLPn+sH7QrpVVfth2Yjvou6clGB3RSj1o28CP1j9YFQnZ/ttJaOthqv0Uo4juv5OUDgFm6A+378HrznWdDpXxWBAIOQeQR0I8xX2gFKUoBSlKAUpSgFc9ef90dX3rzbWClQfBrh+Gx57QMewj21udr+1Tu503TyJLxhh5Bylup4Ls32/IeHvwDJ9ltBjs4Ut48kLyzHq7H1mPtJ/DHlQEF2ki+bajaXXRLlWtpP6QzJCffw4qdrF8pNgZtOmKfvkO2ePHXdCQ/HvAYfGvGn3YnijmX1ZEVx+kAf1104XtRx9RHdM2KUpWxzClKUBqDVID0niPukX9tVS61me4vJYrado0hQBT3atE8gOXDnGSMNHjBB9brWzN2es2Jzawnk/ya/srNYaZDb57qJIt2M7RjOM4/M150+rbVLY0TijSXtrPkRmxbvGLIo70YLxgGTJ28Jgkqec+yrVpN8tzDHcKCFkRWAPUbhnBqMZc8VCQ9lYEACPcRgDA23Eg/Ddiph1bXuHpf0SnbJO9NnZ/5e8jDDzSPMjj7lFdHrkuj6d3erWKmWaUBZ3AlkL7SE2+jnp634V1qrSnr3R2YUlDY+MoPWonWdDiuYzFLGssZ+qw5HtB6g+0c1L1D9sNXFlZT3GcFYzt9rt6KD+sRUGpyzQLy7sY7q5tJ1NjBNIq28+5lZEwCUccqc8AAYPjXV+y+sfPrWK62d33i52Z3YIJBGcDPIrjlrFOIbbS5YkSPa88jLIWZ0iDStvXAxlyo6mun/JeP8VWeepiz/WLH9dS2n4KQbdtlopSlQXFKUoCF7X9ok022a6dGkAZV2rgHLcDJPQVz7Wdb1O7ktoZWGnWt1J3Y7hg8vIJUNJ0G7p6OKsnywIGsAp6G5gB9xcA/nVVu4Xk0plGfnFjMQD47rV+D8Yx+NWirspOTjR0Hs72ahs4+6hjEa9WY8u582bqTU9GgAwK19KvluYYrhOVkjVx+kAa2qqXPMkYYFSMgggj2Hg1znsBlLZrY+tbTywc+SMdv9kiukVzzSBs1HVIvDvoZB75Ixu/EVrifqMeoVwLBSlK6jgFKUoCFbqffXyvrdT76+V4QFKUoCH1K5FteWN43EaTNFIfJZl2An2BsV1auc39mk8bQyLuRhgj/AK8a19L1vUrBRB3SahCvCOZO7lC+CvkENjzrfHNVTOzBkWmmdOrmnbXURqF3HYxndb27iS4YdDIP3uL245J/urxf63qt6O72x6dEfWZH72YjxCtwq+/rWTS9NjtoxFGMKOSTyWJ6sx8SatPIqpFsuZJVEiofTbV7vwgszAh9rqzyfjtroXYOLZptmvlbR/ioP6657pg/7v6jc+M8k7fDcIx/wmundmY9tnbL5QRD+wtXiqRrFUkiRpSlWLClKUBSflhONOz5XEB/3i1WdZsXGoahEk0sZZUnjRGAUmRNrblIw2WTGDxzVm+WP+K5D5Sw/wDyLWh2xTu9Ss5ccTW0kTH2xlZF/wCJqrJtLYpk9rPvySak8SPpdxhZofTjGchon59E+O1iR8R5V0SuXaxpTSlJon7m6iOYpR4easPFT4ipKx+UYwjZqFtLC46yxIZYW9o2+kvuNVhNNFceVSX2X+udaE/e3+p3A5QzxxKfAmFAr/2jXvVflBNyhh06KV5GGO/kjMccYP1vTGWYeAxUNp/ZpYECxz3Eb/WdJWG5j1Yo2VyT7KussYO2VzzVabLxSqdc/ujGjCK6WU4wO9hXdk8ZDoVGR15HhWCbR50/g91JECh3bnZi0o/e3JbOASTuA64Fbfm4HJpXJeKVTtC19YZJ4rq6JwyBXlGFLbcy7XxtC7iAFzxg1ZBq9seRcQ4/0q/treM1JWiHFo0m6n318r63U++vJOOa8Ur8n2vjMB14rFDdI/CtnjPQjj418lgR+vORjr4daFnCS2aPaTAkqOq4z8ayVrxwKDkE5zn1uufPzFZ9w86krTPtYNQz3Um31tjY9+Dis9KgIhJ5FHZT0CCO5AOPtGUbh785rqGlJtgiXyjQfcorh/bHR3trabuZ2W2ldd9tgFSxYYZT9XkA8V3eBcKB5AD8K7IyTWx6cJKStHqlKVYsKUpQFI+WT+K5B5ywj/eLUJ8ofaK0kNk0c6M0N1h8Z4Uqyuc45AIAJGanPljB/cx+M4mhP+8WqF2a0yF76RdkixxrvjjmXa2XJyxUEhseqGHUVlmyLHByZMY65KPJbLDUYZxuikWQDrtOce8dRWaSTH1SRjqOfhitHWOz4Y9/bYhuV6MOFcfYkA9ZT5+Fe9G1EXMYfbscEq6Hqjrwyn41xYs0citHJ1PSywv6N0GvtKVocgrzISBwMny6fjXqlAYY/FSmByfDByfLz8axnTYD/Ix/7Nf2VtUqbFs+t1Pvrw4yCPZXtup99Y5/Vb+ifyqC0fcR9rZqrbSyk7SCueTkKCSCT9n8a+HQ4z4nouOBxt8uPGons7ZYlSQNv6kkA4HDAgk+Odp+Pvxmhs5fT+jmHo8ZnBz6SHA44PB+Ax410Z8KxyUU72N11OXU3dG/LoiHblj6IA4x4e/x5r5FoKKQwZshgeg8PLwFeYNKBQBmkRz6RXeCfrcE45HP5VKW0QRQgJOBjLHJ+J8aw3RjKbbuzJSlKgoV/t1/BCTyBLEfuda6P2n19LC3+cMjS5dEWNMbmZzhQMnFUPtRYNcWssScuRlR5spDAfHFeNb7QHVTaQpBPEsUqyzmWPaoZFO1FJ9b0j+FdGOSUTswSSgyRb5Qb4+rpD/pXCj/AOteB2+1L/ykf+6X/lrapVe8zP8AMy4NcdvtR8dJ+65X/lrJ/wBpE6AtJpVwoAySsiNgDqegrJWK5i3oyfaUj7wRTvMldTLgyfKFqS3ehPdKCqyLC6hsZGZEIBwSM+6onVLCR+7uICFuYx6OfVdTjdG/sPn4GombXI5NHi0g5F6JI4GiKnOEcMZBxgpsUc1bAMcUzU6NM03FxcTBoesJdLt5imTiSFuHU/rU+DDrUdOnzfUBjhLqMkj/ADsWOfeUP9ms2saOs5EisYZ19SZOGHsPmvsNa8Wm3TzRSXE8ciw7imyMoSzDbl+SOmelcOPp+3k1Re3Bvk6yGXC4y8k3SlK6DyxSlKAUpSgPrdT76+V9bqffXygApSlAYpbcMwbxHl5HwNIbdU5Gc4AyTngdKy0qSBSlKgkUpSgFKUoBSlKA87BndgZ88c/fXqlKAUpSgFKUoDwZVBC5GT0FYZL1AoYelk4AHU17NohxxjacjB6eP3V9S1QEELyM49metTsRuZaUpUEn/9k="
                            className="h-8 w-auto"
                        />
                    </a>
                </div>

                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
                            Thông tin
                            <ChevronDownIcon className="h-5 w-5 text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel className="absolute z-10 mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                            <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                                        </div>
                                        <div>
                                            <a href={item.href} className="font-semibold text-gray-900">
                                                {item.name}
                                            </a>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a href="#" className="text-sm font-semibold text-gray-900">Kết nối</a>
                    <Link to="/support" className="text-sm font-semibold text-gray-900">
                        Hỗ trợ
                    </Link>
                    <a href="#" className="text-sm font-semibold text-gray-900">Tải ứng dụng</a>
                </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-6">
                    {user ? (
                        <>
                            <Notifications />
                            {/* Thông tin người dùng */}
                            <div className="flex items-center space-x-2">
                                <img
                                    src={user.avatar || 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUQExIVERIXFRoaGBUXFRoYGRkaGB8XGBgXGBcYHiggHRomGxYVITMhJSktLi4vGh8zODMsNygtLisBCgoKDg0OGxAQGysiICUtLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAQ8AugMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EAE8QAAIBAwMBBAUIAwoLCQAAAAECAwAEEQUSITEGE0FRIjJhcYEHFCNCUpGhsYLB0RUzNDVDYnKSouEkJVNjc3WTo7LS8BcmRVVllLPCw//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACkRAAICAQMDBAAHAAAAAAAAAAABAhEDEiFRBBMxIjJBYQUUI1KBkaH/2gAMAwEAAhEDEQA/AOlmlDSvQPKFKUoQKUpQClKUApSlAKUpQClKUApSlAKUpQClKUApSlAKUpQA0oaUJFKUoQKUpQCtTVrhooJZVxuSN2GemVBIz7OK26+MoIIIyDwQeQfZQkq47RymR49giOUVFkHpZY24OQrkH9+J4PTFa0XaO4hUPIqmIQ7mPLMjFpEjZj9ZC0eCcZG4eRNW02qE7iilgcg7RkHG3IPngAZ8q+G1jwRsXBG0jaMFeTtI8uTx7TVKfJbUuCG0fWJp27sp3ZKSkOV9FismxSoDZKgHkHBzUeO0dyibmRZCY4X3qm1F7x3UhgZC3RRgjxq2JCowQoBAIGABgE5IHsJGa8m1QjaUUjjjaMccjj2Gpp8jUuCraXrs5inMmO8jhaQZTbztVxldx49MDGegFfT2kmZhAQsMqgCX0C+GAkb0FyNwcKrL7C3iKtHzVOfQXldp9EcrwNp9nA49leLmwhlBEkSSBsZ3IDnbnbnI5xk499KfI1Lgrcvawk7F7pNxAWRicR5ZV3zJxtDbgVG7nPWrTC2VByGyB6Q6H2jk8fGvItUwRsXBABGOMLwBjpgVkRAoCgAADAAGAB5AVKv5IbXwfaUpUlRSlKAUpSgFKUoAaUNKEilKUIFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoBSlKAUpSgFKUoAaUNKEilR+u6n81i73YZGLoioCBueRgijJ4Ayw5rAZtTH/hn3XUVVlOMfJeOOUlaRL0qst2juleWJtOk3wIskoWaJtqNu2kZIz6jcDyrYftIXMK21tJdNLB34VSibY+BklyOctjFR3I8jtT8UTrEAZPA868xyBhlSGHmDkfeKpfabVo57e0umTfaNL9Lbs6oXJyiK3OGVZOWGcYGelbmgJCt/OloEWBYI++SI/Qi4zn6IeW3OSB5VHc9VFu16NRa6VG9odTNrD3ioJHLoiKTtBeRlRcnBwMt5VhMmqx8vp8cgH+RugW+CyKv51aU4xdMrHHKStExULb9qrOSQQrMCxJVTtYIzDqqSEbWPsBqOvu0wuAbKO3uDdSK6NAdsckY25LEuQuMHggnNR19HfLp0VrNaS7xLGMRQ5WCOFgRIvd7t0jAc4Pj4c5znlpqjSGC09RfKVVZu1sjRyXMNo72sLYmlkbu2HTcFiILEqGycgVlue1u0SzLbSS2kThHuEZMbsKThCQWUbgMjxq/cjyZ9qfBZaVB67f3Ilgt7VY2llWV/pM4IiCtsGOjNuxk9K29D1hLqPeoKOp2yRtw8bj1kYfr8RU6ldEODSskagO0886tbpFOlqsjsrSum5Q+PokbPAV2yufPA8a8Ta9NN3nzGFZ0hDGSeRisWVGSkZAJd+PDgedaupa2LqCCGOBJpLuESGOQnu44yBuZyOTycADknyrPJkiot3VGmPFLUtvJL6BqrTB4pk7m6hbbNH1GTyrofFGHINStc90zUBpjypPG0lwyR926yu/erv7tYwZTlNrP0JPBzVgl7U90LgXFtLbyQQ980ZZH3IcgFWQkdVI5pizRnFNOxlwyjJ7FipUPpWuGWU28tvLbTCPvArlWDJkDcrISDyR1wamK1TTVoylFxdMUpTFSVBpQ0oSaGt6Wt1EYmZozuV1dcbleNg6MMgjggcGoJtbvI9M1J2unkmt7nu45iqKwUCDwVdvV28PGrZVHvx/izWfZfE/cLc1hmSpM6embtokezWnTNdapA07XEr2cAEku0HLi4wDsUDAz5VudjezN7bXCvcLCI4rH5upikZi2GVgSGUY4BrQmLJLrLcqRYQY8D6k5yK89ibAW19ahd4E+mu77pHYM4aA7vSJ+0elYteaOiL2V+SJ7HolrZfulNF87lM5t7WJiAqZkKcZBCkyF8tjOAKm9QC3kMt9BB8z1OzJEkYIw4ADmNmUYkjdOQ2Mg+6ovsk0d5aT6Q8ncTrcySWrt9YrKzgrn1isgYFR4EVN3KSaZbXU1y8ct9eEIkcWdpIXu40QNyepYn2+yoX+ktf0YdduluIbGRfVlvLRh7iwf9VYtWstQk1WQwC6Qd7Dtk3lbYRqAZtysdrkjgADOaXGn/N4dMtzyY7q1U+9Qc/jWe4v9Z/dGRIVlaAToFWSFBB3OE3t3xw+7O7AG6r5fcZ4F6f5PJ1GK47SRCIhu6t5Edh9oAkrnzG4ffW5o1/rB1Du5o3Fn3soJMUYXYA3dEODuJJC+FbOoxwLrdoUCidoJu8x1K4XYW9vrYNQel9oL83UTPdFoJNRltzCYowAqiQrhwN31RWdGzZi7N3ezU761l5trueSMZ6CVUVsfpRsf6orLPpCRtaaLGd8VuPnFy32juJjU/0nyfclaTjGouv/AK1CfvhH7Kn9O/jHUj/PhHw7urwinJGWSTUGzI/8bWP+iuvyjrzd6Xp+qSyTJO8EkRaO7RG7syIhI2y/zcjhx4ZHu9P/ABrYf6O6/wCGOoDR+zltd/OXmjJYXtwMqxUsu4Eo+0jcn801ecXKbSKQmo402WfQ+0Ntdw3dtaRhLe3iCoyjCtuD8ov2fR6+OfiaP8nB72N5PFYYIFPsjTc3P9JzVr0GMLcaoqgKoggAAGAAI5OAPKq98liAWAI6tIxP4AZ+ArzfxGWnC19nd0vqmpGPt3Z5NjIeWS6jQ/0XYH80FbPylfwnUv8AVceP9pJWT5QpNlkZPGOaFx7SrqePhmtz5QNInu5EmtYjPFd2ogZ1IwgZ0kWRsn1Nhfn3edV/DZ/pb/Y6uPqN29H+Nov9Xf8A6JVgtYN7bfDx91RUEKzazLjlYLGNGOfrSOWA9+1M/EVboLZU9UYzXpxyVGjinicp38HqKFVGAAK90pWRtVFcNKGld55gqu6l2VidJy2pPDaTuXngCRHc4A3hXIL5xH6o54NWKq3qHZxpHlYONj4KJ9h3ZDO3QjkRrjjqz+dZ5I6kaYpqL3N/Xuzr3EskttewwreW6xOrx94XWMPhosOvO2Q561n1bQ49tvLDftbS20JhWRFjlLqRGSndsDlzsQgDnn21FSdnXKQp3mGhMzJJ9ZXdw0TgAAdAQw4BBI6GtKHszcCNCZFModXKbz3W5UQDHoZGXTGfI568Vj2WdK6iJM2nZvT2tPm7yLdlXaVmfCyB5GLMxVcGI5yPAjGK1tK0ewgkeWNleWLIeSScytEPEEux7vj3Vpz9mZjmRWjSYoBwSVIdpWmjbgZU94pDYzuQHFZrbR7kRT27FNhh7uPkEMfSy7YjDDIIJBLck4rSEa8mOSal4ZvdpIY5I03XK2rJKjxykpgOM7OH4bPPHjWtM2oYIfWEVcEkx2sQfAO0nJYgYJwTjitGbs9cxszQsjKoKwqSAyIwPGXR1O0kqMjlCRweuZezkrBxIYTyNoILK43yyMJFwMcyjgE8oD7BLjqdtFYycVSZjHZ0QSR3VrdKLsO6tNcfTGVmGChwy4YYOFHTniiaPGkSwy3qR3XfvcrJGUQh8tuKRyFsqAWBznxrYXs0TDFbu+VjlLb84YAIyoyccMHIYDwxWiez95tZC0TGUN3rggDnvBja0bHb6e4bWBBZutNK4J1t7WZ5Oz4UMVvc3azrctNKEb0kXaN6LtAUL7vA1I6NZtC8089wk0tw0ZLImxeBsQKu45z51rDQJF+dAPvEsTKrO2TllRRvwvT0SPditWbspISyLIgiAAhDBmMY9PpgjDRs2UPgOOOtTpp3RDk2qbJbX9PhlAmklkgaAMRJDIUdQw9Iejk4IA4xzXvSba3s41jWXIkcsGkkDPKzYJOT6x6dK1tV0yaVpEXZ3UndEuXIcGMgnCFCpyB4n4VqXvZ6ZooIo2T6MOrFmwMM6OuV7s7uFwVGz3gVPzdFfirM11pztNJJbagsBnUJImyOXf3YI4ycjCk5AqK1vsw2lWiXFlcuuTEjRsqujs5CCQeKk5GcEg1ltuyT7g+8IyrlW4ykw5V1CqMp4cnJBYHrVkSw72wFjcc5iVWKH1XGCGjJH1WAIyPCscuFZFTRvjzaH5OdaNqDXGLi9jub0I2UhiWJbfcvXv2ZgQVOeGGOh5zirJ2JllukeLT9R+aIjNutJY47loRnrDKGGYj4ZyB0qJu+x1yZNz21pdtx9L30sG/HRpYlBUt59auPYvQTayNdXDxmdoxEscK7Yoowd21c8sSQOSB0rnjicdkqN1lcnuyw9mtAjsY2VWeWSRy8s0hy8jnjc2OAAMAAcAVL1ri8Tzr788Tzq+lltSM9K1zeLXz56vl+IppYtEKaUNK7jzBSlKEClKUApSlAKUpQClKUApSlAKUpQClKUApSlAK+V9pQClKUBlmtmXqOPOsVWOo2+sfrIPeB+YrCGW9mdOTBW6I6lfWQjqCPeK+Vuc4pSlCBSvhNVhb+51ORoLAiK3Q7Zb0jIz4pAPrN7fy4zWUlFbl4Qc3SJXV9ftrT9/mVCei9XPuQcn7q0YNavLn+CadMynpJcMLdPfhsuR8KsfZ3sZaWXppH3sx9aeU75WPnuPT3DFWGud5m/B1R6eK87lP0/SdTZ1aaW0ijz6UcaSSMR5B2ZQD7cV71rs/qDyZtr2GGLA9F7fe2fE7t36qttKprlyadqHBSItE1dDzcWdwPEGOSI/epYfhWbWZrq3fC2MtzHgZkiePOfEd2xDHFXGlSskl8h4YP4KBYdq7WV+5LNBN/kp0MT/APwfganKlNZ0W3vE7u4hSZf5w5HtU9QfaKo+oaPd6T9JAz3tiPWgY7poV842+uoH1Tz+daxzcmE+n/AGlkpWppWpRXUSzQuHjboR4eYI8CPKtutzmFKUoQKUpQClKUBY6VFfui1fDqDe2uTtSPQ70OSVZQRz0qDu0AYgdK9tdk/wB5rXY5Na44OL3MM2SMlsfKUrXv7tYYnmf1UQsfcozWxzld7QySX1wukwMUDDfdSjrHF9gH7TfrHtroemafFbRJBEgSNBhVH/XJ8c1U/kq09hbNeyD6e8cysfJOe7UezHP6VXauKctTs9GENKoUpSqlxSlKAUpSgFKUoDnHarSm0qU6lbKfmrt/hcC9Bn+XQeBHiP76sNvMsirIhDIwBUjoQeQasc0SupRgGVgQQeQQeCD7K5t2YQ2VzcaS5JWP6W3J8YXPq/oscffW2KdOjmz47WpFppSldJxilKUApSlADShpQClKUAqq/KXKRYtEpw00kcQ/Sb+6rVVS7druk05PBr+LPwI/bVMj9LNMSuaOlWdsIo0iXhUVVHuUAD8qzUpXGeiKqvaLt3b2V3DZSK7NJty4xtjDnapbJyckHp0FWquMfKb2aurjVomihd0kWIB1UlV2khtzdFwOeaA7PSlKAVqatqCWsMlxJnZGhZscnA5wB51t1A9vLGS40+5hjXfI0R2qOpIwcD2nFAeexfauLVIWmjRoyr7WRsEg4BByOCCD+dWCub/Ijo89vbzvNG8XeSLtV1KsQgILbTyBk4+FdIoBVB+UmLuLiw1AcbJu4kP+bmHGfYCD99X6qh8rVvv0q4PimyQHyKOp/LNE6IatUblKw2cu+NH+0it94B/XWau88wUpShApSlADShpQClKUAqofKC2xrCbwS/iz7if7qt9UH5UDJOq2kPrJG91JjwSL0V+OWY/Cs8vtZrh96OwmtbUXkVCYxlvv49g8TWt2b1Rbu1huV/lI1J9jYww+DAj4VJVyHpRdOyL0eadi3eA48CRg58qlKUqEqJnLU7SoUpSpKClKUAqF1ae4V8ICE8Cozn31NUqGrNMc1B21ZgsGcxqXGG8f1VAfKacaVee2Ij4kgD86s1Ur5WpibNLVfXubmKID2bg7H3YX8ako3bs96BIGtYGU5Bhjwf0RW/Vc7IDuDcaec/4NMdmephl+kj+7LD4VY67Yu0meZNVJoUpSrFBSlKAGlDSgFKUoBUD2Lh+cy3t+w3JJL83j8u6gG0/BnL/dW32m1H5taTz+KRsR/SPC/wBoipzsbpPzSxt7Y9ViXf7Xb0nP9ZjWGZ+EdXTR8sp/Ym7Ol3kmkTHEMrGS0c9Du9aLPn+sH7QrpVVfth2Yjvou6clGB3RSj1o28CP1j9YFQnZ/ttJaOthqv0Uo4juv5OUDgFm6A+378HrznWdDpXxWBAIOQeQR0I8xX2gFKUoBSlKAUpSgFc9ef90dX3rzbWClQfBrh+Gx57QMewj21udr+1Tu503TyJLxhh5Bylup4Ls32/IeHvwDJ9ltBjs4Ut48kLyzHq7H1mPtJ/DHlQEF2ki+bajaXXRLlWtpP6QzJCffw4qdrF8pNgZtOmKfvkO2ePHXdCQ/HvAYfGvGn3YnijmX1ZEVx+kAf1104XtRx9RHdM2KUpWxzClKUBqDVID0niPukX9tVS61me4vJYrado0hQBT3atE8gOXDnGSMNHjBB9brWzN2es2Jzawnk/ya/srNYaZDb57qJIt2M7RjOM4/M150+rbVLY0TijSXtrPkRmxbvGLIo70YLxgGTJ28Jgkqec+yrVpN8tzDHcKCFkRWAPUbhnBqMZc8VCQ9lYEACPcRgDA23Eg/Ddiph1bXuHpf0SnbJO9NnZ/5e8jDDzSPMjj7lFdHrkuj6d3erWKmWaUBZ3AlkL7SE2+jnp634V1qrSnr3R2YUlDY+MoPWonWdDiuYzFLGssZ+qw5HtB6g+0c1L1D9sNXFlZT3GcFYzt9rt6KD+sRUGpyzQLy7sY7q5tJ1NjBNIq28+5lZEwCUccqc8AAYPjXV+y+sfPrWK62d33i52Z3YIJBGcDPIrjlrFOIbbS5YkSPa88jLIWZ0iDStvXAxlyo6mun/JeP8VWeepiz/WLH9dS2n4KQbdtlopSlQXFKUoCF7X9ok022a6dGkAZV2rgHLcDJPQVz7Wdb1O7ktoZWGnWt1J3Y7hg8vIJUNJ0G7p6OKsnywIGsAp6G5gB9xcA/nVVu4Xk0plGfnFjMQD47rV+D8Yx+NWirspOTjR0Hs72ahs4+6hjEa9WY8u582bqTU9GgAwK19KvluYYrhOVkjVx+kAa2qqXPMkYYFSMgggj2Hg1znsBlLZrY+tbTywc+SMdv9kiukVzzSBs1HVIvDvoZB75Ixu/EVrifqMeoVwLBSlK6jgFKUoCFbqffXyvrdT76+V4QFKUoCH1K5FteWN43EaTNFIfJZl2An2BsV1auc39mk8bQyLuRhgj/AK8a19L1vUrBRB3SahCvCOZO7lC+CvkENjzrfHNVTOzBkWmmdOrmnbXURqF3HYxndb27iS4YdDIP3uL245J/urxf63qt6O72x6dEfWZH72YjxCtwq+/rWTS9NjtoxFGMKOSTyWJ6sx8SatPIqpFsuZJVEiofTbV7vwgszAh9rqzyfjtroXYOLZptmvlbR/ioP6657pg/7v6jc+M8k7fDcIx/wmundmY9tnbL5QRD+wtXiqRrFUkiRpSlWLClKUBSflhONOz5XEB/3i1WdZsXGoahEk0sZZUnjRGAUmRNrblIw2WTGDxzVm+WP+K5D5Sw/wDyLWh2xTu9Ss5ccTW0kTH2xlZF/wCJqrJtLYpk9rPvySak8SPpdxhZofTjGchon59E+O1iR8R5V0SuXaxpTSlJon7m6iOYpR4easPFT4ipKx+UYwjZqFtLC46yxIZYW9o2+kvuNVhNNFceVSX2X+udaE/e3+p3A5QzxxKfAmFAr/2jXvVflBNyhh06KV5GGO/kjMccYP1vTGWYeAxUNp/ZpYECxz3Eb/WdJWG5j1Yo2VyT7KussYO2VzzVabLxSqdc/ujGjCK6WU4wO9hXdk8ZDoVGR15HhWCbR50/g91JECh3bnZi0o/e3JbOASTuA64Fbfm4HJpXJeKVTtC19YZJ4rq6JwyBXlGFLbcy7XxtC7iAFzxg1ZBq9seRcQ4/0q/treM1JWiHFo0m6n318r63U++vJOOa8Ur8n2vjMB14rFDdI/CtnjPQjj418lgR+vORjr4daFnCS2aPaTAkqOq4z8ayVrxwKDkE5zn1uufPzFZ9w86krTPtYNQz3Um31tjY9+Dis9KgIhJ5FHZT0CCO5AOPtGUbh785rqGlJtgiXyjQfcorh/bHR3trabuZ2W2ldd9tgFSxYYZT9XkA8V3eBcKB5AD8K7IyTWx6cJKStHqlKVYsKUpQFI+WT+K5B5ywj/eLUJ8ofaK0kNk0c6M0N1h8Z4Uqyuc45AIAJGanPljB/cx+M4mhP+8WqF2a0yF76RdkixxrvjjmXa2XJyxUEhseqGHUVlmyLHByZMY65KPJbLDUYZxuikWQDrtOce8dRWaSTH1SRjqOfhitHWOz4Y9/bYhuV6MOFcfYkA9ZT5+Fe9G1EXMYfbscEq6Hqjrwyn41xYs0citHJ1PSywv6N0GvtKVocgrzISBwMny6fjXqlAYY/FSmByfDByfLz8axnTYD/Ix/7Nf2VtUqbFs+t1Pvrw4yCPZXtup99Y5/Vb+ifyqC0fcR9rZqrbSyk7SCueTkKCSCT9n8a+HQ4z4nouOBxt8uPGons7ZYlSQNv6kkA4HDAgk+Odp+Pvxmhs5fT+jmHo8ZnBz6SHA44PB+Ax410Z8KxyUU72N11OXU3dG/LoiHblj6IA4x4e/x5r5FoKKQwZshgeg8PLwFeYNKBQBmkRz6RXeCfrcE45HP5VKW0QRQgJOBjLHJ+J8aw3RjKbbuzJSlKgoV/t1/BCTyBLEfuda6P2n19LC3+cMjS5dEWNMbmZzhQMnFUPtRYNcWssScuRlR5spDAfHFeNb7QHVTaQpBPEsUqyzmWPaoZFO1FJ9b0j+FdGOSUTswSSgyRb5Qb4+rpD/pXCj/AOteB2+1L/ykf+6X/lrapVe8zP8AMy4NcdvtR8dJ+65X/lrJ/wBpE6AtJpVwoAySsiNgDqegrJWK5i3oyfaUj7wRTvMldTLgyfKFqS3ehPdKCqyLC6hsZGZEIBwSM+6onVLCR+7uICFuYx6OfVdTjdG/sPn4GombXI5NHi0g5F6JI4GiKnOEcMZBxgpsUc1bAMcUzU6NM03FxcTBoesJdLt5imTiSFuHU/rU+DDrUdOnzfUBjhLqMkj/ADsWOfeUP9ms2saOs5EisYZ19SZOGHsPmvsNa8Wm3TzRSXE8ciw7imyMoSzDbl+SOmelcOPp+3k1Re3Bvk6yGXC4y8k3SlK6DyxSlKAUpSgPrdT76+V9bqffXygApSlAYpbcMwbxHl5HwNIbdU5Gc4AyTngdKy0qSBSlKgkUpSgFKUoBSlKA87BndgZ88c/fXqlKAUpSgFKUoDwZVBC5GT0FYZL1AoYelk4AHU17NohxxjacjB6eP3V9S1QEELyM49metTsRuZaUpUEn/9k='}
                                    alt="avatar"
                                    className="w-8 h-8 rounded-full"
                                />
                                <p>Xin chào, {user.first_name}</p>
                            </div>

                            

                            {/* Nút đăng xuất */}
                            <button
                                onClick={handleLogout}
                                className="text-sm font-semibold text-gray-900 hover:underline"
                            >
                                Đăng xuất
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="text-sm font-semibold text-gray-900">
                                Đăng nhập <span aria-hidden="true">&rarr;</span>
                            </Link>
                            <Link to="/singin" className="text-sm font-semibold text-gray-900">
                                Đăng ký <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </>
                    )}
                </div>
            </nav>
        </header>
    );
}
