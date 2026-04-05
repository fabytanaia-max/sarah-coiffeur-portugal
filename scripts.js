(function () {
  const whatsappNumber = '351937207880';

  const localPreviewItems = [
    {
      id: 'preview-transformacao-01',
      type: 'video',
      src: 'assets/media/videos/transforma-o-01.mp4',
      caption: 'Transformacao em destaque com tecnica, cuidado e acabamento profissional.',
      category: 'transformacao',
    },
    {
      id: 'preview-loiro-01',
      type: 'image',
      src: 'assets/media/images/loiro-p-rola-01.jpg',
      caption: 'Loiro perolado com leitura tecnica, brilho e elegancia no acabamento.',
      category: 'loiros',
    },
    {
      id: 'preview-correcao-01',
      type: 'video',
      src: 'assets/media/videos/corre-o-01.mp4',
      caption: 'Correcao segura com estrategia personalizada e limite do fio respeitado.',
      category: 'correcao',
    },
    {
      id: 'preview-tratamento-01',
      type: 'video',
      src: 'assets/media/videos/tratamento-01.mp4',
      caption: 'Tratamento para preservar forca, brilho e saude durante o processo.',
      category: 'tratamento',
    },
    {
      id: 'preview-feedback-01',
      type: 'image',
      src: 'assets/media/images/feedback-cliente-01.jpg',
      caption: 'Feedback real de cliente sobre atendimento, seguranca e resultado.',
      category: 'feedback',
    },
    {
      id: 'preview-penteado-01',
      type: 'image',
      src: 'assets/media/images/penteados-pt-01.jpg',
      caption: 'Acabamento final com visual elegante e apresentacao premium.',
      category: 'outros',
    },
  ];

  const preferredHighlightIds = ['loiro-p-rola-05', 'transforma-o-06', 'corre-o-01'];

  const hiddenMediaIds = new Set([
    'corre-o-02',
    'cortespt-01',
    'cortespt-03',
    'cortespt-06',
    'cortespt-08',
    'loiro-p-rola-02',
    'loiro-p-rola-03',
    'loiro-p-rola-04',
    'loiro-p-rola-06',
    'loiro-p-rola-08',
    'mecha-02',
    'penteados-pt-02',
    'transforma-o-03',
    'transforma-o-04',
    'transforma-o-05',
    'tratamento-02',
    'tratamento-03',
    'tratamento-05',
    'tratamento-06',
    'linha-de-tratamento-01',
  ]);

  const customDisplayLabels = {
    'transforma-o-01': 'Transforma\u00e7\u00e3o de milh\u00e3o. Preto azulado',
    'transforma-o-02': 'Luzes peroladas - transforma\u00e7\u00e3o. Cliente queria ficar loira. - Depois',
    'transforma-o-03': 'Corte e colora\u00e7\u00e3o - Antes',
    'transforma-o-04': 'Luzes peroladas - transforma\u00e7\u00e3o. Cliente queria ficar loira. - Antes',
    'transforma-o-05': 'Corte e colora\u00e7\u00e3o - Depois',
    'tratamento-01': 'Tratamento de ozonioterapia - Depois',
    'tratamento-02': 'Tratamento de ozonioterapia - Antes',
    'tratamento-03': 'Corre\u00e7\u00e3o de cor com realinhamento t\u00e9rmico - Antes',
    'tratamento-04': 'Corre\u00e7\u00e3o de cor com realinhamento t\u00e9rmico - Depois',
    'loiro-p-rola-07': 'Loiro perolado - Depois',
    'loiro-p-rola-08': 'Loiro perolado - Antes',
    'mecha-01': 'Mechas - Depois',
    'mecha-02': 'Mechas - Antes',
    'cortespt-05': 'Corte e hidrata\u00e7\u00e3o - Depois',
    'cortespt-06': 'Corte e hidrata\u00e7\u00e3o - Antes',
    'cortespt-07': 'Corte Chanel - Depois',
    'cortespt-08': 'Corte Chanel - Antes',
    'cortespt-02': 'Correc\u00e7\u00e3o de corte em cabelo cacheado - Antes',
    'cortespt-03': 'Correc\u00e7\u00e3o de corte em cabelo cacheado - Depois',
    'penteados-pt-02': 'Penteado de noiva - Antes',
    'penteados-pt-03': 'Penteado de noiva - Depois',
    'loiro-p-rola-06': 'Depoimento',
  };

  const categoryDisplayLabels = {
    'loiro-perola': 'Loiros',
    transformacao: 'Transforma\u00e7\u00e3o',
    correcao: 'Corre\u00e7\u00e3o',
    tratamento: 'Tratamento',
    mechas: 'Mechas',
    corte: 'Corte',
    penteado: 'Penteado',
    feedback: 'Depoimento',
  };

  const groupedMedia = {
    'transforma-o-02': {
      tag: 'Transforma\u00e7\u00e3o',
      title: 'Luzes peroladas - transforma\u00e7\u00e3o. Cliente queria ficar loira.',
      items: [
        { type: 'video', src: 'assets/media/videos/transforma-o-04.mp4', label: 'Antes' },
        { type: 'video', src: 'assets/media/videos/transforma-o-02.mp4', label: 'Depois' },
      ],
    },
    'tratamento-01': {
      tag: 'Tratamento',
      title: 'Tratamento de ozonioterapia - Antes e Depois',
      items: [
        { type: 'video', src: 'assets/media/videos/tratamento-02.mp4', label: 'Antes' },
        { type: 'video', src: 'assets/media/videos/tratamento-01.mp4', label: 'Depois' },
      ],
    },
    'mecha-01': {
      tag: 'Mechas',
      title: 'Mechas - Antes e Depois',
      items: [
        { type: 'video', src: 'assets/media/videos/mecha-02.mp4', label: 'Antes' },
        { type: 'video', src: 'assets/media/videos/mecha-01.mp4', label: 'Depois' },
      ],
    },
    'cortespt-05': {
      tag: 'Corte',
      title: 'Corte e hidrata\u00e7\u00e3o - Antes e Depois',
      items: [
        { type: 'video', src: 'assets/media/videos/cortespt-06.mp4', label: 'Antes' },
        { type: 'video', src: 'assets/media/videos/cortespt-05.mp4', label: 'Depois' },
      ],
    },
    'cortespt-02': {
      tag: 'Corte',
      title: 'Correc\u00e7\u00e3o de corte em cabelo cacheado - Antes e Depois',
      items: [
        { type: 'video', src: 'assets/media/videos/cortespt-03.mp4', label: 'Antes' },
        { type: 'video', src: 'assets/media/videos/cortespt-02.mp4', label: 'Depois' },
      ],
    },
    'tratamento-04': {
      tag: 'Tratamento',
      title: 'Corre\u00e7\u00e3o de cor com realinhamento t\u00e9rmico - Antes e Depois',
      items: [
        { type: 'video', src: 'assets/media/videos/tratamento-03.mp4', label: 'Antes' },
        { type: 'video', src: 'assets/media/videos/tratamento-04.mp4', label: 'Depois' },
      ],
    },
    'loiro-p-rola-07': {
      tag: 'Loiros',
      title: 'Loiro perolado - Antes e Depois',
      items: [
        { type: 'video', src: 'assets/media/videos/loiro-p-rola-08.mp4', label: 'Antes' },
        { type: 'video', src: 'assets/media/videos/loiro-p-rola-07.mp4', label: 'Depois' },
      ],
    },
    'cortespt-07': {
      tag: 'Corte',
      title: 'Corte Chanel - Antes e Depois',
      items: [
        { type: 'video', src: 'assets/media/videos/cortespt-08.mp4', label: 'Antes' },
        { type: 'video', src: 'assets/media/videos/cortespt-07.mp4', label: 'Depois' },
      ],
    },
    'penteados-pt-03': {
      tag: 'Penteado',
      title: 'Penteado de noiva - Antes e Depois',
      items: [
        { type: 'video', src: 'assets/media/videos/penteados-pt-02.mp4', label: 'Antes' },
        { type: 'video', src: 'assets/media/videos/penteados-pt-03.mp4', label: 'Depois' },
      ],
    },
  };

  const groupedMediaOrder = [
    'tratamento-04',
    'loiro-p-rola-07',
    'cortespt-02',
    'cortespt-05',
    'cortespt-07',
    'penteados-pt-03',
    'mecha-01',
    'transforma-o-02',
    'tratamento-01',
  ];

  let activeVideo = null;
  let modalHistoryOpen = false;

  function setupTriageForm() {
    const form = document.getElementById('triage-form');
    if (!form) return;

    form.addEventListener('submit', function (event) {
      event.preventDefault();

      const nome = (document.getElementById('nome') || {}).value || '';
      const objetivo = (document.getElementById('objetivo') || {}).value || '';
      const historico = (document.getElementById('historico') || {}).value || '';
      const disponibilidade = (document.getElementById('disponibilidade') || {}).value || '';
      const preocupacao = (document.getElementById('preocupacao') || {}).value || '';

      const message = [
        'Ol\u00e1, vim pelo site da Sarah Coiffeur Praia do Pedrog\u00e3o e quero agendar uma avalia\u00e7\u00e3o personalizada.',
        '',
        'Nome: ' + nome,
        'Objetivo: ' + objetivo,
        'Qu\u00edmica recente: ' + historico,
        'Disponibilidade: ' + disponibilidade,
        'Maior preocupa\u00e7\u00e3o: ' + preocupacao,
      ].join('\n');

      const url = 'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(message);
      window.open(url, '_blank', 'noopener');
    });
  }

  function normalize(text) {
    return (text || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function categoryOf(caption) {
    const text = normalize(caption);
    if (/(correcao|alaranjado|cobreado|tonalidade|mancha)/.test(text)) return 'correcao';
    if (/(loiro|mechas|platinado|perolado|californiana|luzes)/.test(text)) return 'loiros';
    if (/(hidrat|cronograma|restore|leave-in|tratamento|quebra|reconstr)/.test(text)) return 'tratamento';
    if (/(progressiva|alisamento|botox|realinhamento|sem formol|liso)/.test(text)) return 'alisamento';
    if (/(feedback|atendimento|especializada|instrutora|meu trabalho|confianca|pedrogao)/.test(text)) return 'autoridade';
    return 'outros';
  }

  function shortCaption(caption, max) {
    if (!caption) return '';
    if (caption.length <= max) return caption;
    return caption.slice(0, max - 1).trim() + '...';
  }

  function pauseOtherVideos(currentVideo) {
    const videos = Array.from(document.querySelectorAll('video'));
    videos.forEach(function (video) {
      if (video !== currentVideo) video.pause();
    });
    activeVideo = currentVideo || null;
  }

  function registerManagedVideo(video) {
    if (!video) return;

    video.addEventListener('play', function () {
      pauseOtherVideos(video);
    });

    video.addEventListener('ended', function () {
      if (activeVideo === video) activeVideo = null;
    });

    video.addEventListener('pause', function () {
      if (activeVideo === video && video.currentTime === 0) activeVideo = null;
    });
  }

  function getCardLabel(item) {
    return customDisplayLabels[item.id] || '';
  }

  function createMediaCard(item, number) {
    const card = document.createElement('article');
    card.className = 'media-card';
    card.setAttribute('data-id', item.id);
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'Abrir ' + (getCardLabel(item) || 'resultado'));

    const badge = document.createElement('span');
    badge.className = 'media-type';
    badge.textContent = item.type === 'video' ? 'V\u00eddeo' : 'Foto';

    let media;
    if (item.type === 'video') {
      media = document.createElement('video');
      media.src = item.src;
      media.muted = true;
      media.playsInline = true;
      media.preload = 'metadata';
      media.setAttribute('controls', '');
      registerManagedVideo(media);
    } else {
      media = document.createElement('img');
      media.src = item.src;
      media.loading = 'lazy';
      media.alt = shortCaption(item.caption, 90);
    }

    card.appendChild(badge);
    card.appendChild(media);
    return card;
  }

  function setupModal(items) {
    const modal = document.getElementById('media-modal');
    const closeBtn = document.getElementById('close-media-modal');
    const viewer = document.getElementById('media-modal-viewer');
    const tag = document.getElementById('media-modal-tag');
    const caption = document.getElementById('media-modal-caption');
    if (!modal || !closeBtn || !viewer || !tag || !caption) return;

    function close() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      pauseOtherVideos(null);
      viewer.innerHTML = '';
      tag.textContent = '';
      caption.textContent = '';
      if (modalHistoryOpen) {
        modalHistoryOpen = false;
      }
    }

    function requestClose() {
      if (modalHistoryOpen) {
        window.history.back();
        return;
      }
      close();
    }

    function openModal() {
      if (!modal.classList.contains('open')) {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        if (!modalHistoryOpen) {
          window.history.pushState({ modal: 'media' }, '');
          modalHistoryOpen = true;
        }
      }
    }

    function renderGroupedViewer(group) {
      const wrapper = document.createElement('div');
      wrapper.className = 'media-modal-group';

      group.items.forEach(function (entry) {
        const block = document.createElement('div');
        block.className = 'media-modal-group-item';

        const itemLabel = document.createElement('p');
        itemLabel.className = 'media-modal-group-label';
        itemLabel.textContent = entry.label;

        if (entry.type === 'video') {
          const video = document.createElement('video');
          video.src = entry.src;
          video.controls = true;
          video.playsInline = true;
          video.preload = 'metadata';
          registerManagedVideo(video);
          block.appendChild(itemLabel);
          block.appendChild(video);
        } else {
          const img = document.createElement('img');
          img.src = entry.src;
          img.alt = entry.label;
          block.appendChild(itemLabel);
          block.appendChild(img);
        }

        wrapper.appendChild(block);
      });

      viewer.appendChild(wrapper);
    }

    closeBtn.addEventListener('click', requestClose);
    modal.addEventListener('click', function (event) {
      if (event.target === modal) requestClose();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && modal.classList.contains('open')) close();

      const card = event.target.closest('.media-card');
      if (!card) return;
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        card.click();
      }
    });

    document.addEventListener('click', function (event) {
      const card = event.target.closest('.media-card');
      if (!card) return;
      const id = card.getAttribute('data-id');
      const item = items.find(function (candidate) { return candidate.id === id; });
      if (!item) return;

      viewer.innerHTML = '';

      if (groupedMedia[item.id]) {
        renderGroupedViewer(groupedMedia[item.id]);
        tag.textContent = groupedMedia[item.id].tag;
        caption.textContent = groupedMedia[item.id].title;
      } else {
        if (item.type === 'video') {
          const video = document.createElement('video');
          video.src = item.src;
          video.controls = true;
          video.autoplay = true;
          video.playsInline = true;
          registerManagedVideo(video);
          viewer.appendChild(video);
        } else {
          const img = document.createElement('img');
          img.src = item.src;
          img.alt = shortCaption(item.caption, 140);
          viewer.appendChild(img);
        }

        tag.textContent = categoryDisplayLabels[item.category] || 'Resultado';
        caption.textContent = customDisplayLabels[item.id] || '';
      }

      openModal();
    });

    window.addEventListener('popstate', function () {
      if (modal.classList.contains('open')) {
        modalHistoryOpen = false;
        close();
      }
    });
  }

  function setupTestimonialProofs() {
    const modal = document.getElementById('media-modal');
    const viewer = document.getElementById('media-modal-viewer');
    const tag = document.getElementById('media-modal-tag');
    const caption = document.getElementById('media-modal-caption');
    const proofs = Array.from(document.querySelectorAll('.testimonial-proof'));
    if (!modal || !viewer || !tag || !caption || !proofs.length) return;

    function openProof(proof) {
      const src = proof.getAttribute('data-testimonial-image');
      const videoSrc = proof.getAttribute('data-testimonial-video');
      const alt = proof.getAttribute('data-testimonial-alt') || 'Depoimento';
      if (!src && !videoSrc) return;

      viewer.innerHTML = '';

      if (videoSrc) {
        const video = document.createElement('video');
        video.src = videoSrc;
        video.controls = true;
        video.autoplay = true;
        video.playsInline = true;
        registerManagedVideo(video);
        viewer.appendChild(video);
      } else {
        const img = document.createElement('img');
        img.src = src;
        img.alt = alt;
        viewer.appendChild(img);
      }

      tag.textContent = 'Depoimento';
      caption.textContent = '';
      if (!modal.classList.contains('open')) {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
        if (!modalHistoryOpen) {
          window.history.pushState({ modal: 'media' }, '');
          modalHistoryOpen = true;
        }
      }
    }

    proofs.forEach(function (proof) {
      proof.addEventListener('click', function () {
        openProof(proof);
      });

      proof.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openProof(proof);
        }
      });
    });
  }

  function renderMedia(items) {
    const quickEl = document.getElementById('proof-quick');
    const archiveEl = document.getElementById('results-archive');
    if (!quickEl || !archiveEl) return;

    if (!items || !items.length) {
      quickEl.innerHTML = '<p class="caption">Novos resultados em atualizacao.</p>';
      archiveEl.innerHTML = '<p class="caption">Aguarde alguns instantes e atualize a pagina.</p>';
      return;
    }

    const enriched = items
      .map(function (item) {
        return Object.assign({}, item, { category: item.category || categoryOf(item.caption) });
      })
      .filter(function (item) {
        return !hiddenMediaIds.has(item.id);
      });

    const resultCategories = new Set([
      'loiro-perola',
      'transformacao',
      'correcao',
      'tratamento',
      'mechas',
      'corte',
      'penteado',
    ]);

    const curated = preferredHighlightIds
      .map(function (id) {
        return enriched.find(function (item) { return item.id === id; });
      })
      .filter(Boolean);

    const curatedIds = new Set(curated.map(function (item) { return item.id; }));

    const ordered = enriched
      .filter(function (item) {
        return item.type === 'video' && resultCategories.has(item.category) && !curatedIds.has(item.id);
      })
      .sort(function (a, b) {
        const aGrouped = Object.prototype.hasOwnProperty.call(groupedMedia, a.id);
        const bGrouped = Object.prototype.hasOwnProperty.call(groupedMedia, b.id);

        if (aGrouped !== bGrouped) return aGrouped ? -1 : 1;

        if (aGrouped && bGrouped) {
          const aPriority = groupedMediaOrder.indexOf(a.id);
          const bPriority = groupedMediaOrder.indexOf(b.id);
          const aRank = aPriority === -1 ? Number.MAX_SAFE_INTEGER : aPriority;
          const bRank = bPriority === -1 ? Number.MAX_SAFE_INTEGER : bPriority;
          return aRank - bRank;
        }

        return 0;
      });

    quickEl.innerHTML = '';
    curated.forEach(function (item, index) {
      item.displayNumber = index + 1;
      quickEl.appendChild(createMediaCard(item, item.displayNumber));
    });

    archiveEl.innerHTML = '';
    ordered.forEach(function (item, index) {
      item.displayNumber = curated.length + index + 1;
      archiveEl.appendChild(createMediaCard(item, item.displayNumber));
    });

    setupModal(curated.concat(ordered));
  }

  setupTriageForm();
  setupTestimonialProofs();

  fetch('data/media-posts.json?v=20260405-5')
    .then(function (response) { return response.json(); })
    .then(function (data) {
      if (!data || !Array.isArray(data.items) || !data.items.length) {
        renderMedia(localPreviewItems);
        return;
      }
      renderMedia(data.items);
    })
    .catch(function () {
      renderMedia(localPreviewItems);
    });
})();
