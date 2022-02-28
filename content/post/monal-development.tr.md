---
title: "Monal Gelişime İlişkin Gelişmeler"
date: 2022-03-07
#weight: 2
# aliases: ["/first"]
tags: []
author: "Monal"
# author: ["Me", "You"] # multiple authors  
cover:
    image: "" # image path/url
    alt: "" # alt text
    caption: "" # display caption under cover
    relative: true # when using page bundles set this to true
    hidden: false # only hide on current single page
---
> TLDR:
>
> _Bilgi: Monal, iOS 12, iOS 13 ve macOS Catalina desteğini durduracak!
> Bir SwiftUI geliştiricisi arıyoruz.
> Basitleştirilmiş yeni bir web sitesine ihtiyacımız var.
> Daha iyi sürekli finansmanla, push sunucularımız ABD'den Avrupa'ya taşınacak.
> Yeni bir destek postamız var: info@monal-im.org_

İki yıl önce, iOS ve macOS için başka bir XMPP İstemcisi oluşturmak yerine Monal uygulamasını neredeyse tamamen yeniden yazmaya ve süreç içinde aşamalı olarak iyileştirmeye karar verdik. Monal'ı birçok işlevle ilgili kusurları ve sorunları olan bir uygulamadan, anında iletme bildirimi, grup sohbeti ve kısmen uçtan uca şifreleme desteği (OMEMO) gibi çalışma özellikleriyle kullanıcı dostu bir deneyimi destekleyen bir düzeye dönüştürmeyi başardık. Apple sistemleri için bir XMPP istemcisi seçiyorsanız, Monal'ın günümüzde harika bir seçim olduğunu düşünüyoruz. Eski uygulamanın sahip olduğu tüm kusurların üstesinden gelmek için bin saatten fazla yatırım yaptık ve çok çalıştık. Sizi en son betayı denemeye davet ediyoruz!

Monal'ın gelişimi henüz bitmedi ve daha birçok özelliğin gelmesini umuyoruz. Ancak zaman kısıtlamalarımız nedeniyle, bazen bizim ve topluluğun istediğinden biraz daha uzun sürüyor. Şu anda boş zamanımızı Monal'ı korumak ve yeni özellikler geliştirmek için kullanan en fazla iki geliştiriciyiz. Monal'ı boş zamanlarımızda yeterli finansman olmadan geliştirdiğimiz için, belirli özelliklere öncelik vermek bazen zor olabilir. Lütfen bu duruma biraz kredi verin.

### Monal gelecekte nasıl görünmeli?

Size planlarımız hakkında biraz bilgi vermek için en önemli görevleri özetlemeye çalıştık.

#### Arayüz (SwiftUI)

Gelecekte Monal'ın kullanımı kolay olmalıdır. Bu nedenle, arayüz uygun bir yeniden çalışma gerektiriyor ve biz hazırken SwiftUI'ye taşınması gerekiyor. SwiftUI ile tasarım konusunda gelişmeye devam ederken, bu konuda bize yardımcı olmak isteyen bir SwiftUI & Açık Kaynak meraklısı varsa çok seviniriz.
Bu geçişle birlikte uygulamanın erişilebilirliğini de geliştirmek istiyoruz. Bir açık kaynak projesini desteklemek isterseniz ve SwiftUI yolculuğumuzun bir parçası olmak istiyorsanız lütfen bizimle iletişime geçin.

Görev:

* Yeni MUC oluşturma ve yönetim kullanıcı arayüzü ekleyin
* Sohbet görünümünü taşıyın
* İletişim Detaylarını Bitir
    * Grup sohbeti (MUC) katılımcılarını listeleyin
    * Doğrulama için OMEMO şifreleme parmak izlerini görüntüleyin
* Ayarlarımızı taşıyın
* Kalan tüm görünümleri taşıyın

Nitelikler:

* SwiftUI (iOS ve Catalyst) hakkında genel bilgi
* Bir (XMPP) sohbet istemcisini geliştirmeye ilgi
* İsteğe bağlı, ancak tercih edilen: XMPP ile biraz deneyim (örneğin, Monal veya başka bir "modern" XMPP istemcisinin birkaç hafta veya belki aylarca kullanımı)
* İsteğe bağlı: Kapsayıcı / erişilebilir kullanıcı arayüzü tasarlama deneyimi

#### İnternet sitesi

Conversations, Dino veya Gajim'e benzer, anlaşılması daha kolay, modern (basitleştirilmiş) Hugo tabanlı bir web sitesine ihtiyacımız var.

Boş zamanınız varsa ve Hugo ile web siteleri oluşturma konusunda yetenekliyseniz, lütfen bizimle iletişime geçin.

Gereksinimler:

* Basit tasarım çok süslü bir şey değil
* Tasarım gereği gizlilik → Analiz yok, harici CSS, jss, … kullanımı yok

#### Grup Sohbetinde (MUC) OMEMO Şifrelemesi

Grup sohbetleri için OMEMO'yu (MUC) alfa yapımıza entegre etmeye başladık. Alıcı ve gönderen taraflar zaten uygulandı, ancak beta sürümüne yayınlayabilmemiz için birkaç adım daha var.

#### Yeni Alan adımıza geçiş monal-im.org

2021'in sonlarında, mevcut üst düzey alan adımız bunu desteklemediğinden [DNSSEC](https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions) içeren bir alan adı almak istediğimize karar verdik. Bu alan adı, gelecekte esas olarak push sunucularımız ve posta sunucularımız için kullanılacaktır. Artık bize info@monal-im.org adresinden ulaşabileceksiniz.

#### Sunucu oluştur

~20 cömert bağışçı sayesinde, alfa, beta ve kararlı sürümlerimizi oluşturmak için kullanılacak yeni bir yapı sunucusu satın alabildik. Ayrıca, Thilo nihayet telefonuna bağlı uygun bir hata ayıklayıcı ile kodda hata ayıklayabiliyor.

#### Yedekli Push Sunucuları

Şu anda push sunucumuz için yedekli olmayan ve 2021'de istediğimizden daha sık başarısız olan bir AWS ABD örneği kullanıyoruz. Bu nedenle, push sunucumuzu Ansible ile otomatik olarak dağıtmak için dahili bir proje başlattık ve yedekli bir push sunucusu kurulumu çalıştırmanın yollarını aradık. İlk testler şu ana kadar umut verici görünüyor, ancak yeni kurulumumuza geçmeden önce birkaç şeyin daha çözülmesi gerekiyor.

Yeni push sunucusu kurulumuna geçmeden önce, her ay istikrarlı bir finansmana ihtiyacımız var. Almanya'da bir sanal makine ve Finlandiya'da farklı bir barındırıcıda bir sanal makine kiralamanın bize her ay 16€ ile 32€ arasında bir maliyeti olacağını tahmin ediyoruz. İstikrarlı bir fon olmadan bu yeni kurulumu karşılayamayabiliriz ve push sunucularımız ABD'de kalır.

Cömert yapı sunucusu bağışçılarımız sayesinde, dalgalanmalı sunucu finansmanı durumunda ~5 aylık bir tampon olarak kullanılacak birkaç dolarımız kaldı.

#### Gizlilik geliştirilmiş push sunucuları

Mevcut push uygulamamızla, sözde "uygulama sunucularımız" JID'nizi (kullanıcı adı + sunucu), benzersiz ancak aksi takdirde opak bir cihaz kimliğini ve apple tarafından oluşturulan opak bir belirteci ve etkileşim sürelerinizi (push bildirimleri için kaydolduğunuzda) görür. , XMPP sunucunuz bir anında iletme bildirim cihazını tetiklediğinde zaman damgaları).
Bir cihazda birden fazla hesap kullanıyorsanız, benzersiz cihaz kimliği tüm hesaplar arasında paylaşılır. Bir kullanıcının kullandığı tüm jid'leri bildiğimiz için bunun ideal olduğunu düşünmüyoruz.
Gelecekte, kullanıcı adınızı uygulama sunucularımızdan gizleyerek bilgimizi azaltmaya çalışmak istiyoruz. Fikrimiz işe yararsa, yalnızca bir cihazın bir veya daha fazla etki alanında kayıtlı olduğunu ve kullanılan her etki alanından bir push mesajının tetiklendiği zaman damgalarını görürdük.

#### Sesli ve Görüntülü Aramalar

Conversations ve Dino gibi birçok istemci sesli ve görüntülü aramaları destekler, bu nedenle Monal bir sonraki olmalıdır 🙂

#### Kullanım ömrü sonu: iOS 12, iOS 13 ve macOS Catalina artık desteklenmeyecek

iOS 12, iOS 13 ve macOS Catalina'daki kullanıcı grubumuz son yıllarda azalırken, bu eski platformların bakımı için gereken kaynaklar arttı. Bu nedenle, daha yeni iOS sürümlerine odaklanmaya ve eskilerini bırakmaya karar verdik. Bir sonraki kararlı sürüm yalnızca iOS 14 ve sonraki sürümlerde ve macOS Big Sur ve sonraki sürümlerde desteklenecektir. Cihazların çoğu iOS15'i de desteklediğinden, iOS 14'ü ne kadar süre destekleyeceğimizden hala emin değiliz.

Bağış ve Destek
---------------------

Monal, gönüllüler ve topluluk işbirliği ile geliştirilmiştir. Yapılan iş genellikle ödenmez ve geliştiricilerin gelecekte hizmet maliyetlerini ve geliştirmeyi sürdürmeleri gerekir! Lütfen yürütülen sıkı çalışma için biraz geri vermeyi düşünün. Şu anda Monal gelişimini finansal olarak desteklemenin üç yolu vardır:

* [GitHub Sponsorları](https://github.com/sponsors/tmolitor-stud-tu) aracılığıyla bağış yapın
* [Libera Pay](https://liberapay.com/tmolitor) aracılığıyla bağış yapın
* AB vatandaşları da ÖÇKB aracılığıyla bağışta bulunabilirler. IBAN'ını almak için [info@monal-im.org](mailto:info@monal-im.org) adresine posta yoluyla Thilo Molitor ile iletişime geçmeniz yeterlidir.

Burada daha fazla [geliştirme desteği](https://github.com/monal-im/Monal/issues/363) hakkında bilgi edinebilirsiniz! [Monal Wiki'de](https://github.com/monal-im/Monal/wiki) genel bilgilere ulaşın.

#### Çeviriler

Çevirileri [Weblate](https://hosted.weblate.org/engage/monal/) aracılığıyla barındırıyor ve yönetiyoruz.

#### Çok teşekkürler!

Tabii ki, geçtiğimiz iki yılda bize destek olan herkese çok teşekkür ederiz! 🙂

Bizi [Mastodon](https://fosstodon.org/@Monal) üzerinden takip edebilirsiniz.
