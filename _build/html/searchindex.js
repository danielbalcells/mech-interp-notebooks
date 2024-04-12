Search.setIndex({"docnames": ["00-basic-concepts/01-fourier-transform", "01-grokking-modular-addition/01-grokking-modular-addition", "README", "intro"], "filenames": ["00-basic-concepts/01-fourier-transform.ipynb", "01-grokking-modular-addition/01-grokking-modular-addition.ipynb", "README.md", "intro.md"], "titles": ["Frequency-Domain Analysis and Fourier Transforms", "Grokking Modular Addition", "&lt;no title&gt;", "Mechanistic Interpretability Notebooks"], "terms": {"thi": [0, 1, 2, 3], "notebook": [0, 1, 2], "contain": [0, 1, 2, 3], "few": [0, 1, 2, 3], "basic": [0, 2, 3], "exercis": [0, 1], "illustr": 0, "how": [0, 2, 3], "relat": 0, "can": [0, 1], "help": [0, 1, 2, 3], "u": [0, 1], "analyz": [0, 1], "pattern": 0, "almost": [0, 1], "all": 0, "helper": 0, "function": [0, 1], "have": [0, 1], "been": [0, 1], "taken": [0, 1], "from": 0, "neel": [0, 1], "nanda": [0, 1], "": [0, 1, 2, 3], "contribut": [0, 1], "arena": [0, 1], "materi": [0, 1], "hi": [0, 1], "studi": [0, 1], "grokk": [0, 3], "modular": [0, 3], "arithmet": [0, 1], "If": [0, 1, 2, 3], "necessari": [0, 1], "instal": [0, 1], "requir": [0, 1], "repositori": [0, 1, 2], "root": [0, 1], "pip": [0, 1], "r": [0, 1], "txt": [0, 1], "import": [0, 1], "torch": [0, 1], "t": [0, 1], "tensor": [0, 1], "nn": [0, 1], "f": [0, 1], "numpi": [0, 1], "np": [0, 1], "pathlib": [0, 1], "path": [0, 1], "o": [0, 1], "sy": [0, 1], "plotli": [0, 1], "express": [0, 1], "px": [0, 1], "graph_object": [0, 1], "go": [0, 1], "functool": [0, 1], "type": [0, 1], "list": [0, 1], "tupl": [0, 1], "union": [0, 1], "option": [0, 1], "callabl": 0, "fancy_einsum": [0, 1], "einsum": [0, 1], "einop": [0, 1], "jaxtyp": [0, 1], "float": [0, 1], "int": [0, 1], "tqdm": [0, 1], "transformer_len": [0, 1], "util": [0, 1], "panda": 0, "pd": 0, "def": [0, 1], "line": [0, 1], "x": [0, 1], "y": [0, 1], "none": [0, 1], "hover": [0, 1], "xaxi": [0, 1], "yaxi": [0, 1], "kwarg": 0, "to_numpi": [0, 1], "flatten": [0, 1], "fig": 0, "hover_nam": 0, "update_layout": 0, "xaxis_titl": 0, "yaxis_titl": 0, "ndim": 0, "1": [0, 1], "showlegend": 0, "fals": 0, "show": [0, 1], "scatter": [0, 1], "titl": [0, 1], "colorbar_titl": [0, 1], "label": [0, 1], "color": [0, 1], "xaxis_rang": 0, "update_xax": 0, "rang": [0, 1], "yaxis_rang": 0, "update_yax": 0, "lines_list": [0, 1], "mode": 0, "log_i": [0, 1], "plot": [0, 1], "multipl": [0, 1], "i": [0, 2, 3], "shape": [0, 1], "0": [0, 1], "arang": [0, 1], "len": 0, "figur": 0, "layout": 0, "c": [0, 1], "enumer": [0, 1], "els": [0, 1], "add_trac": 0, "name": 0, "hovertext": 0, "yaxis_typ": 0, "log": 0, "line_mark": 0, "marker": 0, "animate_lin": 0, "snapshot_index": 0, "snapshot": [0, 1], "stack": [0, 1], "axi": [0, 1], "j": [0, 1], "row": [0, 1], "append": [0, 1], "df": 0, "datafram": 0, "column": [0, 1], "animation_fram": [0, 1], "range_i": 0, "min": 0, "max": 0, "imshow": [0, 1], "animation_nam": [0, 1], "vline_posit": 0, "vline_label": 0, "hline_posit": 0, "hline_label": 0, "animation_label": 0, "squeez": 0, "slider": 0, "step": [0, 1], "text": 0, "zip": 0, "add_vlin": 0, "5": [0, 1], "line_width": 0, "annotation_text": 0, "annotation_posit": 0, "top": [0, 1], "left": [0, 1], "add_hlin": 0, "y_axi": 0, "x_axi": 0, "get": [0, 1], "autorang": 0, "set": [0, 1, 2, 3], "default": 0, "colour": 0, "scheme": 0, "partial": 0, "color_continuous_scal": 0, "blue": 0, "creat": [0, 1, 2, 3], "good": [0, 1, 2, 3], "diverg": 0, "scale": 0, "ie": 0, "both": [0, 1], "posit": [0, 1], "neg": [0, 1], "valu": [0, 1], "where": [0, 1, 2, 3], "white": 0, "imshow_div": 0, "rdbu": 0, "color_continuous_midpoint": 0, "imshow_fouri": [0, 1], "facet_label": [0, 1], "xlim": [0, 1], "ylim": [0, 1], "nice": 0, "assum": [0, 1], "alreadi": [0, 1, 2, 3], "fourier_basis_nam": [0, 1], "horizont": [0, 1], "compon": [0, 1], "vertic": [0, 1], "updat": [0, 1], "data": [0, 1], "hovertempl": 0, "br": 0, "z": [0, 1], "4f": 0, "annot": 0, "animate_multi_lin": [0, 1], "y_index": [0, 1], "swap_y_anim": 0, "an": [0, 1], "anim": [0, 1], "transpos": [0, 1], "str": 0, "print": [0, 1], "animate_scatt": 0, "color_nam": 0, "ha": [0, 2, 3], "ones": [0, 1], "repeat": 0, "item": [0, 1], "range_x": 0, "backend": [0, 1], "mp": [0, 1], "is_avail": [0, 1], "devic": [0, 1], "elif": [0, 1], "cuda": [0, 1], "cpu": [0, 1], "The": [0, 2], "tell": [0, 1], "what": [0, 2, 3], "make": [0, 1, 2, 3], "up": [0, 1, 2, 3], "given": [0, 1], "sequenc": [0, 1], "we": 0, "think": [0, 1, 2, 3], "chang": [0, 1], "take": [0, 1], "length": [0, 1], "appli": 0, "linear": [0, 1], "repres": [0, 1], "new": [0, 1, 2, 3], "number": [0, 1], "which": [0, 1, 2, 3], "call": [0, 1], "coeffici": [0, 1], "amplitud": [0, 1], "seri": [0, 1], "period": 0, "integ": [0, 1], "frac": [0, 1], "pi": [0, 1], "fulli": [0, 1], "reconstruct": [0, 1], "origin": [0, 1], "mathemat": 0, "speak": 0, "same": [0, 1], "each": [0, 1], "element": [0, 1], "x_k": 0, "result": [0, 1], "project": [0, 1], "onto": [0, 1], "k": [0, 1], "th": [0, 1], "vector": [0, 1], "b": [0, 1], "complex": [0, 1], "sinusoid": 0, "omega_k": [0, 1], "e": [0, 1], "j2": 0, "co": [0, 1], "sin": [0, 1], "sum_": 0, "x_n": 0, "cdot": [0, 1], "b_n": 0, "us": 0, "lead": [0, 1], "exhibit": [0, 1], "veri": [0, 1], "interest": [0, 1], "properti": [0, 1], "turn": [0, 1], "input": 0, "shift": [0, 1], "phase": [0, 1], "convolut": 0, "wise": [0, 1], "product": [0, 1], "you": [0, 1], "read": 0, "about": [0, 1], "them": [0, 1], "here": [0, 1, 2], "For": [0, 1], "purpos": [0, 2, 3], "howev": [0, 1], "re": [0, 1], "mainli": [0, 1], "broader": 0, "notion": [0, 1, 2, 3], "In": [0, 1], "other": [0, 1], "word": 0, "our": [0, 1], "kei": 0, "takeawai": 0, "measur": [0, 1], "strongli": 0, "captur": [0, 1], "more": [0, 1], "gener": [0, 1], "below": [0, 1], "ar": [0, 1, 2], "necessarili": [0, 1], "rather": [0, 1], "some": [0, 1, 2, 3], "sum": 0, "matrix": [0, 1], "rewrit": 0, "whose": [0, 1], "begin": [0, 1], "bmatrix": [0, 1], "x_0": 0, "end": [0, 1], "0_0": 0, "0_n": 0, "1_0": 0, "1_n": 0, "vdot": 0, "ddot": 0, "n_0": 0, "n_n": 0, "dot": [0, 1], "between": [0, 1], "rest": [0, 1], "ll": [0, 1], "refer": [0, 1], "even": [0, 1], "when": [0, 1], "thei": [0, 1], "actual": [0, 1, 2, 3], "formul": 0, "increas": [0, 1], "also": [0, 1, 2, 3], "space": 0, "occupi": 0, "abus": 0, "terminologi": 0, "simplifi": 0, "explan": 0, "still": 0, "suggest": [0, 1], "correct": [0, 1], "intuit": [0, 1], "understand": [0, 1, 2, 3], "next": [0, 1], "section": [0, 1], "see": [0, 1], "perform": [0, 1], "desir": [0, 1], "task": 0, "save": 0, "inconveni": 0, "deal": [0, 1], "follow": [0, 1], "time": [0, 1, 2, 3], "leftarrow": 0, "rightarrow": 0, "6pt": 0, "first": [0, 1, 2, 3], "constant": [0, 1], "altern": 0, "omega": [0, 1], "code": [0, 1], "As": [0, 1], "explain": [0, 1, 2, 3], "abov": [0, 1], "thought": [0, 1], "plu": [0, 1], "respect": [0, 1], "12": [0, 1], "6": [0, 1], "13": 0, "everi": [0, 1], "divid": [0, 1], "its": [0, 1, 2, 3], "own": [0, 2, 3], "norm": [0, 1], "order": [0, 1], "preserv": 0, "interact": 0, "allow": [0, 1], "view": [0, 1], "plai": [0, 1], "button": 0, "transit": [0, 1], "weird": [0, 1], "wai": [0, 1, 2, 3], "so": [0, 1, 2, 3], "might": [0, 1], "easiest": 0, "simpli": [0, 1], "drag": 0, "128": [0, 1], "make_fourier_basi": 0, "return": [0, 1], "pair": 0, "fourier_basi": [0, 1], "g": [0, 1], "const": [0, 1], "exclud": [0, 1], "last": [0, 1], "one": [0, 1, 2, 3], "p": [0, 1], "normal": [0, 1], "dim": [0, 1], "keepdim": 0, "true": [0, 1], "introduc": [0, 1], "annoi": 0, "littl": 0, "problem": [0, 1], "work": [0, 2, 3], "around": 0, "under": 0, "particular": 0, "definit": 0, "theori": [0, 1], "mean": [0, 1], "exactli": 0, "odd": [0, 1], "129": 0, "64": [0, 1], "total": [0, 1], "tmer": 0, "practic": [0, 2, 3], "inspect": 0, "discard": [0, 1], "final": [0, 1, 2, 3], "why": [0, 1], "seemingli": 0, "perfectli": 0, "valid": 0, "much": [0, 1, 2, 3], "like": [0, 1], "correspond": [0, 1], "complet": 0, "whole": [0, 1, 2, 3], "oscil": 0, "two": [0, 1], "would": [0, 1, 2, 3], "were": [0, 1, 2, 3], "continu": [0, 1], "real": 0, "includ": [0, 1], "12345": 0, "fine": 0, "discret": [0, 1], "variabl": [0, 1], "effect": [0, 1], "sampl": 0, "alwai": [0, 1], "zero": [0, 1], "arbitrarili": 0, "decid": [0, 1], "don": 0, "care": [0, 1], "nor": 0, "case": [0, 1], "evalu": 0, "It": [0, 1, 2, 3], "unfortun": [0, 1], "happen": [0, 1], "cross": [0, 1], "handi": 0, "sinc": [0, 1], "zoom": [0, 1], "10": [0, 1], "cycl": [0, 1], "expect": [0, 1], "ident": [0, 1], "except": [0, 1], "offset": 0, "becaus": [0, 1, 2, 3], "maximum": [0, 1], "minimum": 0, "wherea": 0, "x_densiti": 0, "100": [0, 1], "linspac": 0, "cosx": 0, "sinx": 0, "n_lim": 0, "x_lim": 0, "cosn": 0, "sinn": 0, "recal": [0, 1], "decept": 0, "simpl": 0, "implement": 0, "just": [0, 1, 2, 3], "again": [0, 1], "fft": [0, 1], "loos": 0, "fft1d": [0, 1], "batch": [0, 1], "_": [0, 1], "let": [0, 1], "test": [0, 1], "squar": [0, 1], "magnitud": [0, 1], "look": 0, "3": [0, 1], "20": 0, "pow": [0, 1], "visibli": 0, "somewhat": [0, 2, 3], "messi": 0, "highli": [0, 1], "spars": [0, 1], "clean": [0, 1], "inde": [0, 1], "over": [0, 1], "peak": [0, 1], "out": 0, "differ": [0, 1], "kind": 0, "thing": [0, 1], "world": 0, "distinct": 0, "far": [0, 1], "best": [0, 2, 3], "develop": [0, 2, 3], "start": [0, 1], "load": 0, "record": 0, "flute": 0, "wa": [0, 1], "post": [0, 1], "freesound": 0, "user": 0, "juskiddink": 0, "descript": [0, 2, 3], "clai": 0, "bird": 0, "size": [0, 1], "place": [0, 1], "mouth": 0, "blown": 0, "togeth": 0, "give": [0, 1], "find": 0, "torchaudio": 0, "ipython": 0, "displai": 0, "ipd": 0, "wav": 0, "sr": 0, "audio": 0, "detach": 0, "rate": 0, "your": 0, "browser": 0, "doe": 0, "support": 0, "implicitli": 0, "stationari": 0, "intens": 0, "throughout": [0, 1], "reason": [0, 1, 2, 3], "limit": [0, 1], "operand": 0, "second": [0, 2, 3], "44": [0, 1], "point": [0, 1], "small": [0, 1], "50": [0, 1], "milisecond": 0, "slice": [0, 1], "sound": 0, "By": [0, 1], "trial": 0, "error": [0, 1], "fragment": 0, "150m": 0, "200m": 0, "timestamp": 0, "seem": [0, 1], "fairli": [0, 1], "keep": 0, "channel": 0, "onli": [0, 2, 3], "x_min": 0, "15": 0, "x_max": 0, "wav_sampl": 0, "waveform": 0, "wav_n": 0, "wav_basi": 0, "wav_basis_nam": 0, "wav_spectrum": 0, "max_k": 0, "300": 0, "That": [0, 1], "pretti": [0, 1, 2, 3], "promis": 0, "without": [0, 1], "too": 0, "detail": [0, 1], "indic": [0, 1], "formula": [0, 1], "f_": 0, "signal": 0, "index": [0, 1], "consid": [0, 1], "occur": 0, "25": 0, "32": 0, "frequency_to_not": 0, "isn": [0, 1], "essenti": [0, 1], "base": [0, 1], "map": [0, 1], "along": [0, 1], "logarithm": 0, "math": 0, "a4": 0, "440": 0, "hz": 0, "a4_frequ": 0, "semiton": 0, "awai": 0, "log2": 0, "note_nam": 0, "d": [0, 1], "octav": 0, "4": [0, 1], "note_index": 0, "f1": 0, "note1": 0, "f2": 0, "note2": 0, "500": 0, "d4": 0, "640": 0, "instrument": 0, "nearbi": 0, "try": [0, 1, 2, 3], "bright": 0, "major": 0, "third": [0, 1], "quit": [0, 1], "close": [0, 1], "halfwai": 0, "build": 0, "tuner": 0, "now": [0, 1], "decent": [0, 1], "But": [0, 1], "imag": 0, "right": [0, 1], "understood": [0, 1], "analogi": 0, "instead": [0, 1], "x_": 0, "m": [0, 1, 2, 3], "simplic": [0, 1], "dimens": [0, 1], "therefor": [0, 1], "l": 0, "want": [0, 1], "had": [0, 1], "similarli": [0, 1], "straightforward": 0, "outer": 0, "comput": [0, 1], "singl": [0, 1], "magic": [0, 1], "nevertheless": 0, "come": 0, "fourier_2d_basis_term": [0, 1], "direct": [0, 1], "fft2d": [0, 1], "retun": 0, "asum": 0, "present": 0, "output": [0, 1], "multipli": [0, 1], "pn": 0, "pm": 0, "7": [0, 1], "combin": [0, 1], "hand": [0, 1], "example_fn": 0, "14": [0, 1], "46": 0, "8": 0, "30": [0, 1], "dens": [0, 1], "becom": [0, 1], "incredibli": 0, "easili": [0, 1], "spot": 0, "non": [0, 1], "wrap": 0, "hopefulli": 0, "solidifi": [0, 2, 3], "exhiibit": 0, "learn": [0, 2, 3], "recommend": 0, "check": [0, 1], "incred": 0, "video": 0, "legendari": 0, "3blue1brown": 0, "dani": 1, "balcel": 1, "april": 1, "2nd": 1, "2024": 1, "A": 1, "week": 1, "ago": 1, "bunch": 1, "recurs": 1, "center": 1, "finish": 1, "through": 1, "most": [1, 2, 3], "cours": 1, "changlin": 1, "li": 1, "kindli": 1, "walk": 1, "r\u00e9gi": 1, "schiavi": 1, "track": 1, "replic": [1, 2, 3], "2023": 1, "paper": 1, "et": 1, "al": 1, "progress": 1, "via": 1, "mechanist": [1, 2], "interpret": [1, 2], "sever": 1, "bit": 1, "felt": 1, "difficulti": 1, "compar": 1, "worth": 1, "write": 1, "blog": 1, "borrow": 1, "heavili": 1, "content": 1, "specif": 1, "gdown": 1, "activationcach": 1, "hookedtransform": 1, "hookedtransformerconfig": 1, "hook_point": 1, "hookpoint": 1, "layernorm": 1, "my_util": 1, "main": 1, "conduct": 1, "concept": 1, "neural": 1, "network": 1, "offer": 1, "conveni": 1, "back": 1, "overfit": 1, "central": 1, "virtual": 1, "form": 1, "supervis": 1, "machin": [1, 2, 3], "exampl": 1, "pictur": 1, "cat": 1, "dog": 1, "parrot": 1, "train": 1, "correctli": 1, "critic": 1, "though": 1, "abl": 1, "dure": 1, "process": 1, "memor": 1, "rule": 1, "well": [1, 2, 3], "common": 1, "avoid": 1, "hold": 1, "part": 1, "paramet": 1, "unseen": 1, "abil": 1, "mani": 1, "scenario": 1, "often": 1, "roughli": 1, "slightli": 1, "wors": 1, "than": 1, "recent": 1, "experi": 1, "shown": 1, "unusu": 1, "relationship": 1, "loss": 1, "initi": 1, "drop": 1, "quickli": 1, "while": 1, "remain": 1, "high": 1, "confront": 1, "behavior": 1, "perhap": 1, "after": 1, "design": 1, "amount": 1, "consider": 1, "epoch": 1, "000": 1, "low": 1, "suddenli": 1, "long": 1, "sudden": 1, "past": [1, 2, 3], "puzzl": 1, "prompt": 1, "intrigu": 1, "question": 1, "push": 1, "until": 1, "reach": 1, "solut": 1, "level": 1, "individu": 1, "circuit": 1, "implic": 1, "safeti": 1, "exemplifi": 1, "emerg": 1, "deep": 1, "qualit": 1, "leap": 1, "capabl": 1, "appear": 1, "rel": 1, "short": 1, "sort": 1, "principl": 1, "describ": 1, "quantit": 1, "outcom": 1, "perspect": 1, "hard": 1, "predict": 1, "futur": 1, "extrapol": 1, "current": [1, 2, 3], "self": 1, "percept": 1, "deceiv": 1, "aris": 1, "shed": 1, "light": 1, "focus": 1, "residu": 1, "70": 1, "113": 1, "120": 1, "constrain": 1, "version": 1, "fix": 1, "revers": 1, "engin": 1, "transform": [1, 3], "layer": 1, "four": 1, "attent": 1, "head": 1, "d_model": 1, "d_mlp": 1, "512": 1, "diagram": 1, "three": 1, "hot": 1, "encod": 1, "token": 1, "logit": 1, "probabl": 1, "distribut": 1, "oper": 1, "feed": 1, "forward": 1, "entropi": 1, "note": 1, "treat": 1, "classif": 1, "arbitrari": 1, "beyond": 1, "scope": 1, "primarili": 1, "concern": 1, "done": 1, "full": 1, "toi": 1, "entir": 1, "769": 1, "possibl": 1, "adamw": 1, "weight": 1, "decai": 1, "wd": 1, "role": 1, "later": 1, "defin": 1, "cfg": 1, "n_layer": 1, "d_vocab": 1, "n_head": 1, "d_head": 1, "n_ctx": 1, "act_fn": 1, "relu": 1, "normalization_typ": 1, "large_root": 1, "large_fil": 1, "exist": [1, 2, 3], "mkdir": 1, "huggingface_hub": 1, "hf_hub_download": 1, "repo_id": 1, "callummcdougal": 1, "grokking_full_run_data": 1, "filenam": 1, "full_run_data": 1, "pth": 1, "local_dir": 1, "full_run_data_path": 1, "map_loc": 1, "state_dict": 1, "400": 1, "load_in_state_dict": 1, "dataset": 1, "characterist": 1, "1e": 1, "unchang": 1, "shortli": 1, "befor": 1, "mark": 1, "sharpli": 1, "could": 1, "caus": 1, "train_loss": 1, "test_loss": 1, "5000": 1, "run": 1, "intern": 1, "cach": 1, "all_data": 1, "fn": 1, "original_logit": 1, "run_with_cach": 1, "remov": 1, "original_loss": 1, "cross_entropy_high_precis": 1, "2": 1, "0160624103482405e": 1, "07": 1, "librari": 1, "access": [1, 2, 3], "activ": 1, "intermedi": 1, "ani": 1, "score": 1, "earlier": 1, "paid": 1, "itself": 1, "averag": 1, "across": 1, "pai": 1, "equal": 1, "sens": 1, "inform": 1, "job": 1, "precis": 1, "move": 1, "commut": 1, "attn_p": 1, "block": 1, "attn": 1, "hook_pattern": 1, "mean_final_pos_attn": 1, "12769": 1, "conceptu": 1, "found": 1, "grok": 1, "myself": [1, 2, 3], "rememb": 1, "ve": 1, "fed": 1, "112": 1, "took": 1, "rearrang": 1, "separ": 1, "certain": 1, "neuron": 1, "a_i": 1, "113x113": 1, "a_": 1, "xy": 1, "bother": 1, "mlp": 1, "neuron_acts_post": 1, "hook_post": 1, "neuron_acts_pr": 1, "hook_pr": 1, "neuron_acts_post_sq": 1, "neuron_acts_pre_sq": 1, "top_k": 1, "inputs_heatmap": 1, "saw": 1, "verifi": 1, "similar": 1, "attn_mat": 1, "attn_mat_sq": 1, "seq": 1, "within": 1, "ov": 1, "w_e": 1, "w_v": 1, "w_o": 1, "w_": 1, "embed": 1, "matric": 1, "neur": 1, "count": 1, "asid": 1, "w_in": 1, "calcul": 1, "w_neur": 1, "qk": 1, "r_": 1, "_po": 1, "w_q": 1, "w_k": 1, "po": 1, "stream": 1, "v": 1, "w": 1, "queri": 1, "establish": 1, "w_po": 1, "side": 1, "final_pos_resid_initi": 1, "w_attn": 1, "w_qk": 1, "mt": 1, "sqrt": 1, "pre": 1, "softmax": 1, "0th": 1, "1st": 1, "fact": 1, "counterintuit": 1, "me": [1, 2, 3], "paus": 1, "extra": 1, "sai": 1, "opposit": 1, "embedding_dim": 1, "thankfulli": 1, "tool": 1, "belt": 1, "easi": 1, "n": 1, "sine": 1, "cosin": 1, "lossless": 1, "depth": 1, "feel": 1, "free": 1, "domain": [1, 3], "highlight": 1, "observ": 1, "attn_mat_fourier_basi": 1, "neuron_acts_post_fourier_basi": 1, "sign": 1, "previous": 1, "seen": 1, "1d": 1, "respond": 1, "fft1d_given_dim": 1, "w_neur_fouri": 1, "11": 1, "aspect": 1, "tune": 1, "bia": 1, "2d": 1, "neuron_acts_cent": 1, "neuron_acts_centered_fouri": 1, "structur": 1, "ax": 1, "diagon": 1, "These": 1, "arrang": 1, "react": 1, "per": 1, "arrange_by_2d_freq": 1, "idx_2d_y_al": 1, "idx_2d_x_al": 1, "freq": 1, "idx_1d": 1, "sensit": 1, "salient": 1, "energi": 1, "9": 1, "highest": 1, "argmax": 1, "ing": 1, "previou": 1, "salienc": 1, "ratio": 1, "find_neuron_freq": 1, "fourier_neuron_act": 1, "neuron_freq": 1, "neuron_frac_explain": 1, "varianc": 1, "fraction": 1, "fourier_neuron_acts_by_freq": 1, "assert": 1, "sum_per_freq": 1, "sum_across_freq": 1, "key_freq": 1, "neuron_freq_count": 1, "uniqu": 1, "return_count": 1, "fraction_of_activations_positive_at_posn2": 1, "35": 1, "41": 1, "42": 1, "52": 1, "lot": 1, "unpack": 1, "biggest": 1, "influenc": 1, "nine": 1, "clearli": 1, "visibl": 1, "cluster": 1, "There": 1, "five": 1, "chart": 1, "93": 1, "associ": 1, "yellow": 1, "fire": 1, "although": 1, "group": 1, "concentr": 1, "85": 1, "key_freqs_plu": 1, "concaten": 1, "new_on": 1, "fourier_norms_in_each_clust": 1, "reduc": 1, "batch_i": 1, "batch_x": 1, "facet_col": 1, "145": 1, "87": 1, "79": 1, "huge": 1, "least": [1, 2, 3], "attribut": 1, "aren": 1, "grai": 1, "area": 1, "nois": 1, "byproduct": 1, "enough": 1, "perfect": 1, "hypothesi": 1, "causal": 1, "impact": 1, "eight": 1, "cannot": 1, "lost": 1, "w_u": 1, "unembed": 1, "add": 1, "consist": [1, 2, 3], "unfilt": 1, "project_onto_direct": 1, "batch_vec": 1, "norm_v": 1, "project_onto_frequ": 1, "zeros_lik": 1, "basis_ind": 1, "logits_in_freq": 1, "w_out": 1, "w_logit": 1, "filtered_neuron_act": 1, "filtered_neuron_acts_in_freq": 1, "calcluat": 1, "filter": 1, "logits_always_fir": 1, "6e": 1, "format": 1, "test_logit": 1, "bias_correct": 1, "016062e": 1, "869221e": 1, "121782e": 1, "06": 1, "fascin": 1, "improv": 1, "know": 1, "explicit": 1, "propos": 1, "approxim": 1, "albeit": 1, "should": 1, "forc": [1, 2, 3], "those": 1, "believ": 1, "doesn": 1, "immedi": 1, "prove": 1, "fail": 1, "disprov": 1, "degrad": 1, "wrong": 1, "someth": 1, "catastroph": 1, "sizabl": 1, "9f": 1, "000000202": 1, "000199599": 1, "000458831": 1, "001917969": 1, "005197648": 1, "024398938": 1, "000001122": 1, "trivial": 1, "rough": 1, "gamma": 1, "signific": 1, "approx": 1, "alpha": 1, "beta": 1, "person": 1, "didn": 1, "argument": 1, "themselv": 1, "recogn": 1, "handwavei": 1, "hope": 1, "dive": 1, "sake": 1, "happi": 1, "faith": 1, "resembl": 1, "thank": 1, "To": 1, "revisit": [1, 2, 3], "school": 1, "class": 1, "mai": 1, "equat": 1, "interestingli": 1, "match": 1, "82": 1, "manual": 1, "restrict": 1, "involv": 1, "get_trig_sum_direct": 1, "\u03c9_k": 1, "cosx_cosy_direct": 1, "sinx_siny_direct": 1, "sinx_cosy_direct": 1, "cosx_siny_direct": 1, "cos_xplusy_direct": 1, "sin_xplusy_direct": 1, "trig_logit": 1, "cos_xplusy_project": 1, "sin_xplusy_project": 1, "extend": 1, "4e": 1, "0161e": 1, "0549e": 1, "09": 1, "factor": 1, "won": 1, "surpris": 1, "neuron_ind": 1, "need": 1, "replac": 1, "equival": 1, "omit": 1, "hidden": 1, "assign": 1, "sum_k": 1, "c_k": 1, "modulo": 1, "maxim": 1, "dictat": 1, "spread": 1, "interfer": 1, "destruct": 1, "narrow": 1, "whew": 1, "got": 1, "hairi": 1, "recap": 1, "featur": 1, "further": 1, "presenc": 1, "avail": 2, "jupyt": 2, "book": 2, "collect": [2, 3], "document": [2, 3], "my": [2, 3], "research": 2, "do": [2, 3], "acquaint": [2, 3], "field": [2, 3], "pedagog": [2, 3], "anyon": [2, 3], "fit": [2, 3], "distant": [2, 3], "goal": [2, 3], "encourag": [2, 3], "practition": [2, 3], "open": [2, 3], "black": [2, 3], "box": [2, 3], "deeper": [2, 3], "model": [2, 3], "insid": [2, 3], "mech": [2, 3], "interp": [2, 3], "peopl": [2, 3], "familiar": [2, 3], "defeat": [2, 3], "spend": [2, 3], "share": [2, 3], "easier": [2, 3], "account": [2, 3], "mechan": [2, 3], "site": 3, "frequenc": 3, "analysi": 3, "fourier": 3, "addit": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"frequenc": [0, 1], "domain": 0, "analysi": 0, "fourier": [0, 1], "transform": 0, "setup": [0, 1], "introduct": [0, 1], "1d": 0, "defin": 0, "basi": [0, 1], "cosin": 0, "sine": 0, "term": [0, 1], "A": 0, "side": 0, "note": 0, "round": 0, "down": 0, "n": 0, "2": 0, "calcul": 0, "music": 0, "exampl": 0, "2d": 0, "conclus": 0, "grokk": 1, "modular": 1, "addit": 1, "motiv": 1, "what": 1, "i": 1, "The": 1, "task": 1, "load": 1, "model": 1, "visual": 1, "curv": 1, "look": 1, "around": 1, "everyth": 1, "period": 1, "us": 1, "input": 1, "space": 1, "insid": 1, "explor": 1, "pattern": 1, "algorithm": 1, "ha": 1, "learn": 1, "find": 1, "kei": 1, "intervent": 1, "doe": 1, "work": 1, "better": 1, "we": 1, "onli": 1, "keep": 1, "from": 1, "quadrat": 1, "sum": 1, "angl": 1, "trig": 1, "put": 1, "all": 1, "togeth": 1, "summari": 1, "do": 1, "how": 1, "did": 1, "out": 1, "mechanist": 3, "interpret": 3, "notebook": 3, "fundament": 3, "research": 3, "reproduct": 3}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 60}, "alltitles": {"Frequency-Domain Analysis and Fourier Transforms": [[0, "frequency-domain-analysis-and-fourier-transforms"]], "Setup": [[0, "setup"], [1, "setup"]], "Introduction: the Fourier transform and the frequency domain": [[0, "introduction-the-fourier-transform-and-the-frequency-domain"]], "Frequency analysis in 1D": [[0, "frequency-analysis-in-1d"]], "Defining a basis of cosine and sine terms": [[0, "defining-a-basis-of-cosine-and-sine-terms"]], "A side-note on rounding down N//2": [[0, "a-side-note-on-rounding-down-n-2"]], "Calculating the 1D Fourier transform": [[0, "calculating-the-1d-fourier-transform"]], "A musical example": [[0, "a-musical-example"]], "Frequency analysis in 2D": [[0, "frequency-analysis-in-2d"]], "Conclusion": [[0, "conclusion"]], "Grokking Modular Addition": [[1, "grokking-modular-addition"]], "Introduction": [[1, "introduction"]], "Motivation: what is \u201cgrokking\u201d?": [[1, "motivation-what-is-grokking"]], "The task: grokking modular addition": [[1, "the-task-grokking-modular-addition"]], "Loading the model": [[1, "loading-the-model"]], "Visualizing the grokking curve": [[1, "visualizing-the-grokking-curve"]], "Looking around: everything is periodic!": [[1, "looking-around-everything-is-periodic"]], "Using the input space to look inside the model": [[1, "using-the-input-space-to-look-inside-the-model"]], "Using the Fourier basis to explore periodic patterns": [[1, "using-the-fourier-basis-to-explore-periodic-patterns"]], "What algorithm has the model learned?": [[1, "what-algorithm-has-the-model-learned"]], "Finding key frequencies": [[1, "finding-key-frequencies"]], "Intervention: does the model work better if we only keep the key frequencies?": [[1, "intervention-does-the-model-work-better-if-we-only-keep-the-key-frequencies"]], "From quadratic Fourier terms to sums of angles": [[1, "from-quadratic-fourier-terms-to-sums-of-angles"]], "Intervention: does the model work better if we only keep the trig terms?": [[1, "intervention-does-the-model-work-better-if-we-only-keep-the-trig-terms"]], "Putting it all together: the modular addition algorithm": [[1, "putting-it-all-together-the-modular-addition-algorithm"]], "Summary: what is the model doing, and how did we find out?": [[1, "summary-what-is-the-model-doing-and-how-did-we-find-out"]], "Mechanistic Interpretability Notebooks": [[3, "mechanistic-interpretability-notebooks"]], "Fundamentals": [[3, null]], "Research Reproductions": [[3, null]]}, "indexentries": {}})